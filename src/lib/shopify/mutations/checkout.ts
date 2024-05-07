// hamid
export const createCheckoutMutation = /* GraphQL */ `
  mutation createCheckout($lineItems: [CheckoutLineItemInput!]!) {
    checkoutCreate(input: { lineItems: $lineItems }) {
      checkout {
        ...checkout
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
  ${checkoutFragment}
`;