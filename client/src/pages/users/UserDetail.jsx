import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function UserDetail() {
  const { id } = useParams();
  const [felhasznalo, setFelhasznalo] = useState(null);  // Javítva a setFelhasznalok -> setFelhasznalo

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/listuser/${id}`);
        const data = await response.json();
        if (data.success && data.userobj.success) {
          setFelhasznalo(data.userobj.response);
        } else {
          console.error('Error fetching user details:', data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!felhasznalo) {
    return <div>Loading...</div>;
  }

  return (
    <div id="home">
        <header className="hero">
          <Navbar />
          <div className="content">
            <h1>Felhasználó adatai</h1>
          </div>
        </header>
        <main>
          <div id="card_container">
            <div className="cardevent">
              <div className="content">
                <p><strong>Neve:</strong> {felhasznalo.Vezeteknev} {felhasznalo.Keresztnev}</p>
                <p><strong>Neme:</strong> {felhasznalo.Neme}</p>
                <p><strong>Születési Dátuma:</strong> {new Date(felhasznalo.SzuletesiDatum).toLocaleDateString()}</p>
                <p><strong>Felhasználó Neve:</strong> {felhasznalo.FelhasznaloNev}</p>
                <p><strong>Email címe:</strong> {felhasznalo.Email}</p>
                <p><strong>Foglalkozása:</strong> {felhasznalo.Foglalkozasa}</p>
                <p><strong>Iskolai Végzettsége:</strong> {felhasznalo.IskolaiVegzettsege}</p>
                <p><strong>Regisztráció Dátuma:</strong> {new Date(felhasznalo.RegisztracioDatuma).toLocaleDateString()}</p>
                <p><strong>Felhasználó Státusza:</strong> {felhasznalo.FelhasznaloStatusza}</p>
                <div className="buttons">
                  <Link to="/users" className="btn">Vissza</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default UserDetail;
