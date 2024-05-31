import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function UserDetail() {
  const { id } = useParams();
  const [felhasznalo, setFelhasznalok] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/listuser/${id}`);
        const data = await response.json();
        if (data.success) {
          setFelhasznalok(data.event);
        } else {
          console.error('Failed to fetch event details');
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!felhasznalo) {
    return <div>Loading...</div>;
  }

  return (
    <>
     
      <div className="event-details">
        <h1>A felhasználó Részletes adatai</h1>
        <p><strong>Neve</strong> {felhasznalo.Vezeteknev} {felhasznalo.Keresztnev}</p>
        <p><strong>Neme</strong> {felhasznalo.Neme}</p>
        <p><strong>Születési Dátuma</strong> {felhasznalo.SzuletesiDatum}</p>
        <p><strong>Felhasznalo Neve</strong> {felhasznalo.FelhasznaloNev}</p>
        <p><strong>Email címe</strong> {felhasznalo.Email}</p>
        <p><strong>Foglalkozása</strong> {felhasznalo.Foglalkozasa}</p>
        <p><strong>Iskolai Végzettsége</strong>{felhasznalo.IskolaiVegzettsege}</p>
        <p><strong>Regisztráció Dátuma</strong> {rendezveny.RegisztracioDatuma}</p>
        <p><strong>Felhasználó Státusza</strong> {rendezveny.FelhasznaloStatusza}</p>
      </div>
      
    </>
  );
}

export default UserDetail;