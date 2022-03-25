import Headerperso from './components/Headerperso.js'
import logo from './logo.svg'
import './App.css'
import ProductList from './components/Productslist.js'
import Cart from './components/Cart.js'



function App() {
  return (
    <div className="App">
      < Headerperso />
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        < ProductList />
          < Cart />
      </header>
    </div>
  )
}
export default App