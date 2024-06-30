import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { NextPage } from 'next'
import Hero from '~components/hero'
import Tech from '~components/tech'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Home: NextPage = () => {
  {
    return (
      <>
        <section>
          <Hero />
        </section>
        <section>
          <Tech />
        </section>
      </>
    )
  }
}
export default Home
