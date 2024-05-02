import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header"
import LoginPage from "./pages/LoginPage"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <Header />
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
                    }>
                    
                    
                    </Route>
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </Router>
        </>
        
    )
}

export default App