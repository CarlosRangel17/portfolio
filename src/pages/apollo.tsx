// pages/apollo.tsx
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '~consts/apollo'
import { useProductTiles } from '~/queries/productTiles'
import Layout from '~layout/Layout'

const ApolloPage = () => {
  const {
    loading,
    error,
    data: products
  } = useProductTiles(
    ['143915P'], // list of product IDs
    '290007', // store code
    'TWIN', // mattress size
    '77025' // zip code
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div id="product-tiles" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
      {products.map((product) => (
        <div
          key={product.url}
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            margin: '10px',
            maxWidth: '300px',
            textAlign: 'center'
          }}
          // onClick={() => handleClick(product)}
        >
          <img
            src={product.image.url}
            alt={product.image.alt}
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h2>
          <p style={{ fontSize: '16px', color: '#555' }}>${product.price}</p>
          <p style={{ fontSize: '14px', color: '#888' }}>
            Rating: {product.rating} ({product.ratingCount} reviews)
          </p>
          <p style={{ fontSize: '14px', color: '#888' }}>Delivery: {product.deliveryEstimate}</p>
          <p style={{ fontSize: '14px', color: '#888' }}>Variants: {product.variantsLabel}</p>
          <button
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              background: '#0070f3',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            View Product
          </button>
        </div>
      ))}
    </div>
  )
}

const ApolloPageWithProvider = () => (
  <Layout page="share">
    <ApolloProvider client={client}>
      <ApolloPage />
    </ApolloProvider>
  </Layout>
)

export default ApolloPageWithProvider
