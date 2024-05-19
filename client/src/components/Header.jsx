import React from 'react'
import Navbar from './Navbar'
function Header() {
  return (
    <header className="hero">
            <Navbar />
            <div className="content">
                <h1>Fogaljon weboldalunkon keresztül</h1>
                <p>Nálunk biztos van olyan rendezvény ami érdekelheti önt!</p>
                <a href="/login" className="btn"><i className="fas fa-chevron-right"></i> Bejelentkezés</a>
                <h4>Nincs még felhasználói fiókja?</h4>
                <a href="./main" className="btn-little">Regisztráció</a>
            </div>
    </header>
  )
}

export default Header