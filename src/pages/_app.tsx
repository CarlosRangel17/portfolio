// Global styles here
import '~/styles/main.scss'
import { ThemeProvider } from '~contexts/theme/provider'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
