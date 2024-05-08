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
    console.log("checkout", checkout);
    return checkout;
  }
  catch (e) {
    console.log("error", e);
    return (e as Error).message as string;
  }

}