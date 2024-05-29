import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Events() {
  // Statikus rendezvény adatok
  const rendezvenyek = [
    {
      RendezvenyNeve: 'Tavaszi Konferencia',
      RendezvenyIdopontja: '2024-05-10 09:00:00',
      EloadoNeveTitulusa: 'Dr. Kiss Peter',
      RendezvenyTemaja: 'Tavaszi fejlesztések',
      RendezvenyTipusa: 'Konferencia',
      RendezvenyHelyszine: 'Budapest',
      RendezvenyLeirasa: 'Egy egész napos konferencia a tavaszi fejlesztésekről.',
      SzabadHelyekSzama: 100
    },
    {
      RendezvenyNeve: 'Nyári Tábor',
      RendezvenyIdopontja: '2024-07-20 10:00:00',
      EloadoNeveTitulusa: 'Dr. Szabo Eva',
      RendezvenyTemaja: 'Nyári kikapcsolódás',
      RendezvenyTipusa: 'Tábor',
      RendezvenyHelyszine: 'Siófok',
      RendezvenyLeirasa: 'Egy hét nyári tábor gyerekeknek.',
      SzabadHelyekSzama: 50
    },
    {
        RendezvenyNeve: 'Tavaszi Konferencia',
        RendezvenyIdopontja: '2024-05-10 09:00:00',
        EloadoNeveTitulusa: 'Dr. Kiss Peter',
        RendezvenyTemaja: 'Tavaszi fejlesztések',
        RendezvenyTipusa: 'Konferencia',
        RendezvenyHelyszine: 'Budapest',
        RendezvenyLeirasa: 'Egy egész napos konferencia a tavaszi fejlesztésekről.',
        SzabadHelyekSzama: 100
      },
      {
        RendezvenyNeve: 'Nyári Tábor',
        RendezvenyIdopontja: '2024-07-20 10:00:00',
        EloadoNeveTitulusa: 'Dr. Szabo Eva',
        RendezvenyTemaja: 'Nyári kikapcsolódás',
        RendezvenyTipusa: 'Tábor',
        RendezvenyHelyszine: 'Siófok',
        RendezvenyLeirasa: 'Egy hét nyári tábor gyerekeknek.',
        SzabadHelyekSzama: 50
      },
      {
        RendezvenyNeve: 'Tavaszi Konferencia',
        RendezvenyIdopontja: '2024-05-10 09:00:00',
        EloadoNeveTitulusa: 'Dr. Kiss Peter',
        RendezvenyTemaja: 'Tavaszi fejlesztések',
        RendezvenyTipusa: 'Konferencia',
        RendezvenyHelyszine: 'Budapest',
        RendezvenyLeirasa: 'Egy egész napos konferencia a tavaszi fejlesztésekről.',
        SzabadHelyekSzama: 100
      },
      {
        RendezvenyNeve: 'Nyári Tábor',
        RendezvenyIdopontja: '2024-07-20 10:00:00',
        EloadoNeveTitulusa: 'Dr. Szabo Eva',
        RendezvenyTemaja: 'Nyári kikapcsolódás',
        RendezvenyTipusa: 'Tábor',
        RendezvenyHelyszine: 'Siófok',
        RendezvenyLeirasa: 'Egy hét nyári tábor gyerekeknek.',
        SzabadHelyekSzama: 50
      },
      {
          RendezvenyNeve: 'Tavaszi Konferencia',
          RendezvenyIdopontja: '2024-05-10 09:00:00',
          EloadoNeveTitulusa: 'Dr. Kiss Peter',
          RendezvenyTemaja: 'Tavaszi fejlesztések',
          RendezvenyTipusa: 'Konferencia',
          RendezvenyHelyszine: 'Budapest',
          RendezvenyLeirasa: 'Egy egész napos konferencia a tavaszi fejlesztésekről.',
          SzabadHelyekSzama: 100
        },
        {
          RendezvenyNeve: 'Nyári Tábor',
          RendezvenyIdopontja: '2024-07-20 10:00:00',
          EloadoNeveTitulusa: 'Dr. Szabo Eva',
          RendezvenyTemaja: 'Nyári kikapcsolódás',
          RendezvenyTipusa: 'Tábor',
          RendezvenyHelyszine: 'Siófok',
          RendezvenyLeirasa: 'Egy hét nyári tábor gyerekeknek.',
          SzabadHelyekSzama: 50
        },
    // Adj hozzá további rendezvényeket itt
  ];

/*function Events() {

    const [rendezvenyek, setRendezvenyek] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.example.com/events'); // Cseréld ki az API URL-t a megfelelőre
            const data = await response.json();
            setRendezvenyek(data);
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
            <h1>Rendezvények</h1>
            <a href="/events/create" className="btn">
              <i className="fas fa-chevron-right"></i>Új rendezvény hozzáadása
            </a>
          </div>
        </header>
        <main>
          <div id='card_container'>
            {rendezvenyek.map((rendezveny, index) => (
              <div className="card" key={index}>
                <div className="content">
                  <p><strong>Rendezvény neve:</strong> {rendezveny.RendezvenyNeve}</p>
                  <p><strong>Időpont:</strong> {rendezveny.RendezvenyIdopontja}</p>
                  <p><strong>Előadó neve és titulusa:</strong> {rendezveny.EloadoNeveTitulusa}</p>
                  <p><strong>Téma:</strong> {rendezveny.RendezvenyTemaja}</p>
                  <p><strong>Típus:</strong> {rendezveny.RendezvenyTipusa}</p>
                  <p><strong>Helyszín:</strong> {rendezveny.RendezvenyHelyszine}</p>
                  <p><strong>Leírás:</strong> {rendezveny.RendezvenyLeirasa}</p>
                  <p><strong>Szabad helyek száma:</strong> {rendezveny.SzabadHelyekSzama}</p>
                </div>
                <div className="buttons">
                  <a href={`/events/edit`} className="btn">Módosít</a>
                  <a href={`/events/delete`} className='btn-delete'>Töröl</a>
                  <a href={`/events/details`} className="btn">Részletek</a>
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

export default Events;
