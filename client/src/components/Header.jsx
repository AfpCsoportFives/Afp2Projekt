import React from 'react'

function Header() {
  return (
    <header className="hero">
            <div id="navbar" className="navbar">
                <h1 className="logo">
                <span className="text-primary"> <i className="fa-brands fa-react"></i> Rendezvényszervező</span>
                </h1>
            </div>
            <div className="content">
                <h1>Fogaljon weboldalunkon keresztül</h1>
                <p>Nálunk biztos van olyan rendezvény ami érdekelheti önt!</p>
                <a href="login.html" className="btn"><i className="fas fa-chevron-right"></i> Bejelentkezés</a>
                <h4>Nincs még felhasználói fiókja?</h4>
                <a href="registration.html" className="btn-little">Regisztráció</a>
            </div>
    </header>
  )
}

export default Header