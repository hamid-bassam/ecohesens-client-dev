"use server"

import { createCheckout } from "../../src/lib/shopify";

export async function checkout(selectedVariantIds: string[] | undefined) {

  if (!selectedVariantIds) {
    return 'Missing product variant ID';
  }

  const list = selectedVariantIds.map((selectedVariantId) => {

    return { variantId: selectedVariantId, quantity: 1 as 1 }
  }
  );
  try {
    const checkout = await createCheckout(list);
    return checkout;
  }
  catch (e) {
    return 'Error creating checkout';
  }

}