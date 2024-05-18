import React from 'react'
import Footer from '../components/Footer'
function Main() {
  return (
    <>
        <body id="home">
            <header class="hero">
                <div id="navbar" class="navbar">
                    <h1 class="logo">
                    <span class="text-primary"> <i class="fa-brands fa-react"></i> Rendezvényszervező</span>
                    </h1>
                </div>
                <div class="content_menu">
                    <a href="/events" class="btn"><i class="fas fa-chevron-right"></i> Rendezvények</a>
                    <a href="/users" class="btn"><i class="fas fa-chevron-right"></i> Felhasználók</a>
                </div>
            </header>
            <main>
                
                <section id="rolunk" class="icons bg-dark">
                    <div class="flex-items">
                        <div>
                            <i class="fas fa-university fa-2x"></i>
                            <div>
                                <h3>Rendezvény regisztrálás</h3>
                                <p>Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. 
                                Tempore, repellendus?</p>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-ticket fa-2x"></i>
                            <div>
                                <h3>Helyfoglalás</h3>
                                <p>Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. 
                                Tempore, repellendus?</p>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-user fa-2x"></i>
                            <div>
                                <h3>Tanácsadás</h3>
                                <p>Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. 
                                Tempore, repellendus? Ok</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </body>
    </>
  )
}

export default Main