import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import Main from "./pages/Main"
import Evets from "./pages/Events"
import Users from "./pages/users/Users"
import AddNewUser from "./pages/users/AddNewUser";

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
                        <Footer />
                        </>
                    }>
                    </Route>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/users/create' element={<AddNewUser />} />
                    <Route path='/events' element={<Evets />} />
                </Routes>
            </Router>
        </>
        
    )
}

export default App