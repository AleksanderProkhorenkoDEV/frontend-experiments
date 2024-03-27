import React from 'react'
import App from './pages/App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
