// src/queries/productTiles.ts
import { gql, useQuery } from '@apollo/client'

const GET_PRODUCT_TILES = gql`
  query GetProductTiles($productIds: [ID!]!, $storeId: ID, $size: ProductSize!, $zip: ZipCode!) {
    ui {
      productTiles(productIds: $productIds, storeId: $storeId, size: $size, zip: $zip) {
        badge {
          label
          type
        }
        bestFor {
          descriptions
          title
        }
        colorVariants {
          color
          url
          name
        }
        deliveryEstimate
        eyebrow {
          label
          type
        }
        image {
          url
          alt
        }
        inStore
        name
        originalPrice
        price
        priceBadge {
          label
          type
        }
        promo
        rating
        ratingCount
        variantsLabel
        url
      }
    }
  }
`

export const useProductTiles = (productIds, storeId, size, zip) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_TILES, {
    variables: { productIds, storeId, size, zip }
  })

  return {
    loading,
    error,
    data: data?.ui?.productTiles || []
  }
}
