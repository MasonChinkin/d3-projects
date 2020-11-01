import Head from 'next/head'
import Header from '../components/Header'
import RedditViz from '../components/redditViz/RedditViz'

export default function Home() {
  return (
    <>
      <Head>
        <title>homepage</title>
      </Head>

      <Header title="Reddit Visualization" />
      <RedditViz />
    </>
  )
}
