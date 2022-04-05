import Headerperso from './components/Headerperso.js'
import logo from './logo.svg'
import './App.css'
import ObjetsList from './components/ObjetsList.js'
import Cart from './components/Cart.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Headerperso />
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h2> Liste des produits</h2>
        <ObjetsList />
        <Cart />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App
