import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>dia | o que aprendi</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>

              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}