import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="stylesheet"
          />

          {/* favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* font icons */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />

          <Footer />
        </body>
      </Html>
    )
  }
}
