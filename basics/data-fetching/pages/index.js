import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

// -- If want page got render in server or Server-side Rendering then import & use
// getServerSideProps() rather than getStaticProps()
// but this study case is not best to use SSR(Server-side rendering) so we use SSG(Static-site generation)
export async function getStaticProps() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <center>
          <p>My name is <b>Expitc</b> common Know as <b><i>TC</i></b> Sir! but<br /></p>
          <a style={{ color: '#f00200', textDecoration: 'none', cursor: 'default' }} href="https://github.com/expitc"><b><i>THEY DON'T KNOW ME SIR!</i></b></a>
        </center>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// -- Next.js team has created a React hook for data fetching called SWR
// We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.
// example usage
//
/* import useSWR from 'swr'
function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <div>hello {data.name}!</div>
} */
