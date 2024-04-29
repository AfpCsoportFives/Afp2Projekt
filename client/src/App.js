function App() {
    return (
        <>
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
        <main>
            <section id="rolunk" className="icons bg-dark">
                <div className="flex-items">
                    <div>
                        <i className="fas fa-university fa-2x"></i>
                        <div>
                            <h3>Rendezvény regisztrálás</h3>
                            <p>Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. 
                            Tempore, repellendus?</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-ticket fa-2x"></i>
                        <div>
                            <h3>Helyfoglalás</h3>
                            <p>Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. 
                            Tempore, repellendus?</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-user fa-2x"></i>
                        <div>
                            <h3>Tanácsadás</h3>
                            <p>Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. 
                            Tempore, repellendus?</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer className="footer bg-light">
            <div className="social">
                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
                <a href="#"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
            <p>Copyright &copy; 2024</p>
        </footer>
        </>
    )
}

export default App