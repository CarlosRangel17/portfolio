// pages/share.tsx
import React, { FunctionComponent, useState } from 'react'
import Layout from '~layout/Layout'

const Share: FunctionComponent = () => {
  const [canShare, setCanShare] = useState(false)
  const [shareData, setShareData] = useState({
    title: 'Check this out!',
    text: 'Sharing from our POC page using Web Share API.',
    url: typeof window !== 'undefined' ? window?.location?.href : ''
  })

  // Check if Web Share API is supported and if the current data can be shared
  const checkShareSupport = () => {
    if (navigator.canShare && navigator.canShare(shareData)) {
      setCanShare(true)
    } else {
      setCanShare(false)
    }
  }

  // Try to share the data using Web Share API
  const handleShare = async () => {
    try {
      await navigator.share(shareData)
      alert('Shared successfully!')
    } catch (error) {
      alert('Error sharing: ' + error.message)
    }
  }

  return (
    <Layout page="share">
      <div style={{ padding: '20px' }}>
        <h1>Web Share API Test</h1>
        <p>This page tests the Web Share API functionality across different browsers and devices.</p>
        <button onClick={checkShareSupport} style={{ marginRight: '10px' }}>
          Check Share Support
        </button>
        <button onClick={handleShare} disabled={!canShare}>
          Share Content
        </button>
        <p>{canShare ? 'Sharing is supported!' : 'Sharing is not supported on this device/browser.'}</p>
      </div>
    </Layout>
  )
}

export default Share
