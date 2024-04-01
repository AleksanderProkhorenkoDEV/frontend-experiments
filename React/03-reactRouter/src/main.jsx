import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom';
import MainRouter from './router/MainRouter';


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  <BrowserRouter basename='/'>
    <header>
      <Link to='/hello'>Home</Link>
      <br />
      <Link to='/hello/:name'>Type your name in the URL /hello/name</Link>
    </header>

    
    <MainRouter />
  </BrowserRouter>
)
