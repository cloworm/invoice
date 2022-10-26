import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import Invoices from '@/components/invoices'
import ListHeader from '@/components/list-header'

const Home: FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Invoice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ListHeader />
        <Invoices />
      </main>
    </div>
  )
}

export default Home
