import React, { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { InvoiceProvider } from '../state/invoice.state'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <InvoiceProvider>
      <Component {...pageProps} />
    </InvoiceProvider>
  )
}

export default MyApp
