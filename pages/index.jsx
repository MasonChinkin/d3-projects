import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <Header title="homepage" />
      </Head>
      <div>Cool stuff will go here</div>
    </>
  )
}
