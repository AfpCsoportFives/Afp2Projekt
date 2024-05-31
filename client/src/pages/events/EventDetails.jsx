import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function EventDetails() {
  const { id } = useParams();
  const [rendezveny, setRendezveny] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/listevent/${id}`);
        const data = await response.json();
        if (data.success) {
          setRendezveny(data.event);
        } else {
          console.error('Failed to fetch event details');
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!rendezveny) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="event-details">
        <h1>{rendezveny.RendezvenyNeve}</h1>
        <p><strong>Időpont:</strong> {rendezveny.RendeznenyIdőpontja}</p>
        <p><strong>Előadó neve és titulusa:</strong> {rendezveny.EloadoNeveTitulusa}</p>
        <p><strong>Téma:</strong> {rendezveny.RendezvenyTemaja}</p>
        <p><strong>Típus:</strong> {rendezveny.RendezvenyTipusa}</p>
        <p><strong>Helyszín:</strong> {rendezveny.RendezvenyHelyszine}</p>
        <p><strong>Leírás:</strong> {rendezveny.RendezvenyLeirasa}</p>
        <p><strong>Szabad helyek száma:</strong> {rendezveny.SzabadHelyekSzama}</p>
        <p><strong>Létrehozás dátuma:</strong> {rendezveny.LetrehozasDatuma}</p>
        <p><strong>Utolsó módosítás dátuma:</strong> {rendezveny.UtolsoModosítasDatuma}</p>
      </div>
      <Footer />
    </>
  );
}

export default EventDetails;