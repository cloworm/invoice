import React, { FunctionComponent } from 'react'
import Head from 'next/head'

const Home: FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Invoice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Hello</p>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
