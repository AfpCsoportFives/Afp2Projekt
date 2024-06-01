import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useState, useEffect} from 'react'


function Users() {
<<<<<<< Updated upstream
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
=======
  const [felhasznalok, setFelhasznalok] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/listuser'); 
        const data = await response.json();
        if (data.success) {
          setFelhasznalok(data.userList);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error by fetching users:', error);
      }
    };
    
    fetchUsers();
  }, []);
    
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteUser`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ felhasznalokId: id })
      });
      const data = await response.json();
      if (data.success) {
        setFelhasznalok(felhasznalok.filter(user => user.felhasznalokId !== id));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <div id="home">
        <header className="hero">
          <Navbar />
          <div className="content">
            <h1>Regisztrált felhasználók</h1>
            <a href="/users/create" className="btn">
              <i className="fas fa-chevron-right"></i>Új felhasználó hozzáadása
            </a>
          </div>
        </header>
        <main>
          <div id='card_container'>
            {Array.isArray(felhasznalok) && felhasznalok.map((felhasznalo, index) => (
              <div className="card" key={index}>
                <div className="content">
                  <p><strong>Felhasználó neve:</strong>{felhasznalo.Vezeteknev} {felhasznalo.Keresztnev}</p>
                  <p><strong>E mail cím:</strong>{felhasznalo.Email}</p>             
                  <p><strong>Neme:</strong>{felhasznalo.Neme}</p>
                  <p><strong>Címe:</strong>{felhasznalo.Iranyitoszam} {felhasznalo.Varos} {felhasznalo.UtcaHazszam}</p>
                  <p><strong>Foglalkozás:</strong>{felhasznalo.Foglalkozasa}</p>
                  <p><strong>Id</strong>{felhasznalo.felhasznalokId}</p>
                </div> 
                <div className="buttons">
                  <Link to={`/users/details/${felhasznalo.felhasznalokId}`} className="btn">Részletek</Link>
                  <Link to={`/users/update/${felhasznalo.felhasznalokId}`} className="btn">Módosít</Link>
                  <button onClick={() => deleteUser(felhasznalo.felhasznalokId)} className='btn-del'>Töröl</button>
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
      </div>
   </>
>>>>>>> Stashed changes
);
}

export default Users;