import React, { FunctionComponent, useState } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { InvoiceProvider } from '../state/invoice.state'
import Layout from '@/components/layout'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/components/theme/theme'
import { GlobalStyles } from '@/components/theme/global-styles'
import useDarkMode from 'use-dark-mode'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme
  
  console.log('theme', theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <InvoiceProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </InvoiceProvider>
    </ThemeProvider>
  )
}

export default MyApp
