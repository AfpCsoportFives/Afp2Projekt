import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect} from 'react'


function Users() {

    const [felhasznalok, setFelhasznalok] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.example.com/users'); // Cseréld ki az API URL-t a megfelelőre
            const data = await response.json();
            setFelhasznalok(data);
          } catch (error) {
            console.error('Hiba történt az adatok betöltésekor:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <>
        <body id="home">
        <header className="hero">
            <Navbar />
            <div className="content">
            <h1>Regisztrált felhasználók</h1>
            </div>
        </header>
        <main>
            <div id='card_container'>
            {felhasznalok.map((felhasznalo, index) => (
                <div className="card" key={index}>
                <p>{felhasznalo.vezeteknev}</p>
                <p>{felhasznalo.keresztnev}</p>
                <p>{felhasznalo.felhasznaloNev}</p>
                <p>{felhasznalo.jelszo}</p>
                <p>{felhasznalo.email}</p>
                <p>{felhasznalo.szuletesiDatum}</p>
                <p>{felhasznalo.neme}</p>
                <p>{felhasznalo.iranyitoszam}</p>
                <p>{felhasznalo.varos}</p>
                <p>{felhasznalo.utcaHazszam}</p>
                <p>{felhasznalo.foglalkozas}</p>
                <p>{felhasznalo.iskolaiVegzettsege}</p>
                <p>{felhasznalo.regisztracioDatuma}</p>
                <p>{felhasznalo.felhasznaloStatusza}</p>
                <a href="">Módosít</a>
                <a href="" className='btn-delete'>Töröl</a>
                <a href="">Részletek</a>
                </div>
            ))}
            </div>
            <section id="rolunk" className="icons bg-dark">
            <div className="flex-items">
                <div>
                <i className="fas fa-university fa-2x"></i>
                <div>
                    <h3>Rendezvény regisztrálás</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, repellendus?</p>
                </div>
                </div>
                <div>
                <i className="fa-solid fa-ticket fa-2x"></i>
                <div>
                    <h3>Helyfoglalás</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, repellendus?</p>
                </div>
                </div>
                <div>
                <i className="fa-solid fa-user fa-2x"></i>
                <div>
                    <h3>Tanácsadás</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, repellendus? Ok</p>
                </div>
                </div>
            </div>
            </section>
        </main>
        <Footer />
    </body>
  </>
);
}

export default Users;