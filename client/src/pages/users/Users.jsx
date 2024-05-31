import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
 
function Users() {
    const [felhasznalok, setFelhasznalok] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:5000/listuser'); 
            const data = await response.json();
            if(data.success) {
              setFelhasznalok(data.userList);
            } else {
              console.log('Failed to fetch users');
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
            setFelhasznalok(felhasznalok.filter(userList => userList.felhasznalokId !== id));
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
                <a href="/users/create" className="btn"><i className="fas fa-chevron-right"></i>Új felhasználó hozzáadása</a>
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
                      <button onClick={() => deleteUser(felhasznalo.felhasznaloId)} className='btn-del'>Töröl</button>
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
);
}

export default Users;