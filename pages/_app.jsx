import '../styles/globals.scss'
import { Provider } from 'react-redux'
import createStore from '../redux/reduxStore'

const store = createStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
