import '../css/style.sass'
import ReactDOM from 'react-dom'
import App from '../components/App'
import Store from '../store'
import { Provider } from 'mobx-react'
import WebFont from 'webfontloader'
console.disableYellowBox = true
WebFont.load({
  google: {
    families: ['Roboto:400,500,600']
  },
  active: () => {
    const store = new Store()
    store.login()
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      , document.getElementById('main')
    )
  }
})
