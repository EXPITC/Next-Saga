import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { Layout, siteTitle } from '../components'
// import { component, additional } from '../components'

export default function Home() {
  /* const { Layout } = component
  const { siteTitle } = additional */
  console.log("hit")
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey I am <b>Expitc</b> known as <i><b>Tri</b></i>. Nice to meet you Sir!</p>
        <center className={utilStyles.fade}><b><i>THEY DON'T KNOW ME SON!</i></b></center>
        <p className={utilStyles.fade}>(This is a sample website - you'll be building a site like this on<br />
          <a href="https://nextjs.org/learn">Our Next.js tutorial</a>)
        </p>
      </section>
    </Layout >
  )
}
