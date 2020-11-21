import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.scss'
import App from './containers/App'

// 引入并执行 redux-demo
// import fn from './test/redux-demo'
// fn()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
