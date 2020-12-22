import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>The page you were not mean to see</title>
      </Head>

      <Header title="The page you were not mean to see" />
      <main>
        <iframe
          allowFullScreen
          className="giphy-embed"
          frameBorder="0"
          height="266"
          src="https://giphy.com/embed/WrNfErHio7ZAc"
          style={{ margin: '40px 0' }}
          title="gif"
          width="480"
        />
        <div>
          Hey...you got here by manually editing the url. Why you gotta be like
          that?
        </div>
      </main>
    </>
  )
}
