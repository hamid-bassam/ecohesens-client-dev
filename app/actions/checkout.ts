"use server"
import type { NextApiRequest, NextApiResponse } from 'next';
//lib utils 
export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';


async function createCheckout(productVariantIds: string[], quantity: number) {
  const query = JSON.stringify({
    query: `mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${productVariantIds[0]}", quantity: ${quantity} }]
      }) {
        checkout {
          webUrl
        }
      }
    }`
  });

  const response = await fetch(`https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2022-01/graphql`, {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      'Content-Type': 'application/json',
    },
    body: query
  });

  const jsonResponse = await response.json();
  return jsonResponse.data.checkoutCreate.checkout.webUrl;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { productVariantIds, quantity } = req.body;
    try {
      const checkoutUrl = await createCheckout(productVariantIds, quantity);
      res.status(200).json({ checkoutUrl });
    } catch (error) {
      console.error('Failed to create checkout:', error);
      res.status(500).json({ error: 'Failed to create checkout' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}