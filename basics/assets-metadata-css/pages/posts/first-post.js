import Head from 'next/head'
import Link from 'next/link'
import { Layout, Alert } from '../../components'
// import { component } from '../components'
// import Script from 'next/script'

export default function FirstPost() {
  // const { Layout, Alert } = component
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`Script loaded correctly, window.FB has been populated`)
        }}
     /> */}
      <Alert type='success'>
        <h1>First Post</h1>
      </Alert>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  )
}
