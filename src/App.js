import React from 'react'
import { GlobalStyle } from './style.js'
import { Iconfont } from './static/iconfont/iconfont'
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/Header'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Iconfont />
        <Header />
      </div>
    </Provider>
  )
}

export default App
