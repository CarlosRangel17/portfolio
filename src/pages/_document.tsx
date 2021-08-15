/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import COLORS from '~consts/colors'

const codeToRunOnClient = `
;(function() {
  function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode')
      const hasPersistedPreference = typeof persistedColorPreference === 'string'
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {
          return persistedColorPreference
      }
      // If they haven't been explicit, let's check the media
      // query
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const hasMediaQueryPreference = typeof mql.matches === 'boolean'
      if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light'
      }
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light'
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty(
    '--color-text',
    colorMode === 'light'
      ? '${COLORS.text.light}'
      : '${COLORS.text.dark}'
  );
  root.style.setProperty(
    '--color-background',
    colorMode === 'light'
      ? '${COLORS.background.light}'
      : '${COLORS.background.dark}'
  );
  root.style.setProperty(
    '--color-primary',
    colorMode === 'light'
      ? '${COLORS.primary.light}'
      : '${COLORS.primary.dark}'
  );
  root.style.setProperty('--initial-color-mode', colorMode);
})()`

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Fonts - preload the css first */}
          <link as="style" href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="preload" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
          <script
            dangerouslySetInnerHTML={{
              __html: codeToRunOnClient
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
