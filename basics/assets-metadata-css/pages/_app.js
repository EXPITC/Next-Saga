import { Layout } from '../components'
import '../styles/globals.css'
import variable from '../styles/variable.module.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout color={variable.primaryColor} app={true}>
      <Component {...pageProps} />
    </Layout>
  )
}
