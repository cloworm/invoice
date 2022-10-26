import React, { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { InvoiceProvider } from '../state/invoice.state'
import Layout from '@/components/layout'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <InvoiceProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </InvoiceProvider>
  )
}

export default MyApp
