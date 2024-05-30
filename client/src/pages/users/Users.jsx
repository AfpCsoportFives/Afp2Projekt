import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useState, useEffect} from 'react'


function Users() {
  // Statikus felhasználó adat
  const felhasznalok = [
    {
      vezeteknev: 'Kovacs',
      keresztnev: 'Janos',
      felhasznaloNev: 'kovacs.janos',
      jelszo: 'password1',
      email: 'janos.kovacs@example.com',
      szuletesiDatum: '1980-01-15',
      neme: 'Férfi',
      iranyitoszam: '1234',
      varos: 'Budapest',
      utcaHazszam: 'Fo utca 1',
      foglalkozas: 'Tanár',
      iskolaiVegzettsege: 'Egyetem',
      regisztracioDatuma: '2024-01-01 10:00:00',
      felhasznaloStatusza: 1
    }
  ];


/*function Users() {

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
      }, []);*/

  return (
    <>
        <body id="home">
        <header className="hero">
            <Navbar />
            <div className="content">
            <h1>Regisztrált felhasználók</h1>
              <a href="/users/create" className="btn"><i className="fas fa-chevron-right"></i>Új felhasználó hozzáadása</a>
            </div>
        </header>
        <main>
            <div id='card_container'>
            {felhasznalok.map((felhasznalo, index) => (
                <div className="card" key={index}>
                  <div className="content">
                    <p>{felhasznalo.vezeteknev} {felhasznalo.keresztnev}</p>
                    <p>{felhasznalo.felhasznaloNev}</p>
                    <p>{felhasznalo.jelszo}</p>
                    <p>{felhasznalo.email}</p>
                    <p>{felhasznalo.szuletesiDatum}</p>
                    <p>{felhasznalo.neme}</p>
                    <p>{felhasznalo.iranyitoszam} {felhasznalo.varos} {felhasznalo.utcaHazszam}</p>
                    <p>{felhasznalo.foglalkozas}</p>
                    <p>{felhasznalo.iskolaiVegzettsege}</p>
                    <p>{felhasznalo.regisztracioDatuma}</p>
                  </div>
                  <div className="buttons">
                    <a href="/users/create" className="btn">Módosít</a>
                    <a href="" className='btn-delete'>Töröl</a>
                    <a href="" className="btn">Részletek</a>
                  </div>
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