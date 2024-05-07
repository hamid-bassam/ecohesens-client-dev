// hamid
// Define GraphQL fragments if needed
const checkoutFragment = /* GraphQL */ `
  fragment checkout on Checkout {
    id
    webUrl
    subtotalPrice
    totalTax
    totalPrice
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          quantity
          variant {
            id
            sku
            title
            image {
              src
            }
            priceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;