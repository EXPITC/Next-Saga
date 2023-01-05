import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const name = 'EXPITC';
export const siteTitle = 'Next.js Sample Website';

export function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Follow Next.js official documentation"
        />
        <meta name="og:title" content={siteTitle} />
        { /* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/Eizouken-theydontknowmesonBig.png"
              className={utilStyles.borderCircle}
              width={144}
              height={144}
              alt="profile"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image priority
                src="/images/Eizouken-theydontknowmesonBig.png"
                className={utilStyles.borderCircle}
                height={124}
                width={124}
                alt="profile"
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
