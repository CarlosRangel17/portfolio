import * as React from 'react'
import Head from 'next/head'

import Header from './Header'
import Subheader from './Subheader'
import { ScrollSpyProvider } from '~contexts/scroll-spy/provider'
import WindowDimensionsProvider from '~contexts/window-dimensions'
import Footer from './Footer'
import { Page } from '~interfaces/layout'

const defaultTitle = 'Carlos Rangel Portfolio'
const defaultDescription = 'Welcome to Carlos Rangels portfolio website where you can learn about his career.'
const defaultOGURL = ''
const defaultOGImage = ''

type Props = {
  description?: string
  ogImage?: string
  title?: string
  url?: string
  page?: Page
  headerData?: any
}

const Layout: React.FunctionComponent<Props> = ({ children, title, description, url, page = 'homepage', ogImage }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>{title || defaultTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content={description || defaultDescription} name="description" />
      <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link color="#000000" href="/favicon-mask.svg" rel="mask-icon" />
      <meta content="website" property="og:type" />
      <meta content={url || defaultOGURL} property="og:url" />
      <meta content={title || ''} property="og:title" />
      <meta content={description || defaultDescription} property="og:description" />
      <meta content={url || defaultOGURL} name="twitter:url" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={ogImage || defaultOGImage} name="twitter:image" />
      <meta content={ogImage || defaultOGImage} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
    </Head>
    <WindowDimensionsProvider>
      <ScrollSpyProvider>
        <Header page={page} />
        <Subheader page={page} />
        <main>{children}</main>
        <Footer />
      </ScrollSpyProvider>
    </WindowDimensionsProvider>
  </>
)

export default Layout
