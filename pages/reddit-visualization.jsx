import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import Inputs from '../components/reddit-visualization/components/Inputs'
import Instructions from '../components/reddit-visualization/components/Instructions'
import Visualization from '../components/reddit-visualization/components/Visualization'
import initializeViz from '../components/reddit-visualization/vizScript'

const RedditViz = () => {
  useEffect(() => {
    initializeViz()
  }, [])

  return (
    <>
      <Head>
        <title>Reddit Visualization</title>
      </Head>

      <Header title="Reddit Visualization" />

      <main>
        <Instructions />
        <Inputs />
        <Visualization />
      </main>
    </>
  )
}

export default RedditViz
