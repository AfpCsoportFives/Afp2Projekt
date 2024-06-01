import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Events() {
  const [rendezvenyek, setRendezvenyek] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/listevents');
        const data = await response.json();
        if (data.success) {
          setRendezvenyek(data.eventList);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteEvent`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ RendezvenyId: id })
      });
      const data = await response.json();
      if (data.success) {
        setRendezvenyek(rendezvenyek.filter(event => event.RendezvenyId !== id));
      } else {
        console.error('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <>
      <div id="home">
        <header className="hero">
          <Navbar />
          <div className="content">
            <h1>Rendezvények</h1>
            <a href="/events/create" className="btn">
              <i className="fas fa-chevron-right"></i> Új rendezvény hozzáadása
            </a>
          </div>
        </header>
        <main>
          <div id='card_container'>
            {Array.isArray(rendezvenyek) && rendezvenyek.map((rendezveny, index) => (
              <div className="card" key={index}>
                <div className="content">
                  <p><strong>Rendezvény neve:</strong> {rendezveny.RendezvenyNeve}</p>
                  <p><strong>Időpont:</strong> {rendezveny.RendezvenyIdőpontja}</p>
                  <p><strong>Előadó neve és titulusa:</strong> {rendezveny.EloadoNeveTitulusa}</p>
                  <p><strong>Téma:</strong> {rendezveny.RendezvenyTemaja}</p>
                  <p><strong>Típus:</strong> {rendezveny.RendezvenyTipusa}</p>
                  <p><strong>Helyszín:</strong> {rendezveny.RendezvenyHelyszine}</p>
                  <p><strong>Szabad helyek száma:</strong> {rendezveny.SzabadHelyekSzama}</p>
                </div>
                <div className="buttons">
                  <Link to={`/events/details/${rendezveny.RendezvenyId}`} className="btn">Részletek</Link>
                  <Link to={`/events/edit/${rendezveny.RendezvenyId}`} className="btn">Módosít</Link>
                  <button onClick={() => deleteEvent(rendezveny.RendezvenyId)} className='btn-del'>Töröl</button>
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

export default Events;