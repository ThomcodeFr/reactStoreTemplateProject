import '../components/headerperso.css'
import logoBlue from '../assets/img/logo-blue.png'

function headerPerso() {
  return (
    <div className="headerperso">
      <header className="App-headerperso">
        <section id="header-style">
        <img src={logoBlue} className="header-logo" alt="Logo des 8 fantastiques" />
          <h1>Trouver le design de CV adapté à vos besoins</h1>
        </section>
      </header>
    </div>
  )
}

export default headerPerso
