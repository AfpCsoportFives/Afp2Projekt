import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import Main from "./pages/Main"
import Evets from "./pages/events/Events"
import Users from "./pages/users/Users"
import AddNewUser from "./pages/users/AddNewUser";
import UpdateUser from "./pages/users/UpdateUser";
import AddNewEvent from "./pages/events/AddNewEvent";
import UpdateEvent from "./pages/events/UpdateEvent";
import EventDetails from "./pages/events/EventDetails";
import UserDetail from "./pages/users/UserDetail";

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
                    <Route path='/users/update/:id' element={<UpdateUser />} />
                    <Route path='/users/details/:id' element={<UserDetail />} />
                    <Route path='/events' element={<Evets />} />
                    <Route path='/events/create' element={<AddNewEvent />} />
                    <Route path="/events/edit/:id" element={<UpdateEvent />} />
                    <Route path='/events/details/:id' element={<EventDetails />} /> {/* Új útvonal */}
                </Routes>
            </Router>
        </>
        
    )
}

export default App