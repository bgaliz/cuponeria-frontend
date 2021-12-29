import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global.style';
import theme from '../styles/theme';

import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigator';

import AppProvider from '../hooks';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AppProvider>
            <Header />
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </AppProvider>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
