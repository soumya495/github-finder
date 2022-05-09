import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// REDUX
import { Provider } from 'react-redux'
import rootReducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({
  reducer: rootReducer,
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
