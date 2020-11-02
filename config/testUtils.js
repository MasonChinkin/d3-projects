import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import createStore from '../redux/reduxStore'

const Providers = ({ children }) => {
  return <Provider store={createStore()}>{children}</Provider>
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export default customRender
