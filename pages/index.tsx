import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { NextPage } from 'next'
import Hero from '~components/hero'

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
      <section>
        <Hero />
      </section>
    )
  }
}
export default Home
