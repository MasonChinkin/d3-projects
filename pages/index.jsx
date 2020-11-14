import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>homepage</title>
      </Head>

      <Header title="homepage" />
      <main>he grid will go here</main>
    </>
  )
}
