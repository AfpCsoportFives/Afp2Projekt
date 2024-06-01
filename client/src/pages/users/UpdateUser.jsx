import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Vezeteknev: '',
    Keresztnev: '',
    FelhasznaloNev: '',
    Jelszo: '',
    Email: '',
    SzuletesiDatum: '',
    Neme: '',
    Iranyitoszam: '',
    Varos: '',
    UtcaHazszam: '',
    Foglalkozasa: '',
    IskolaiVegzettsege: '',
    RegisztracioDatuma: '',
    FelhasznaloStatusza: '',
    Cookie: '',
    CookieExpire: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/listuser/${id}`);
            const data = await response.json();
            if (data.success && data.userobj.success) {
                setFormData(data.userobj.response);
              } else {
                console.error('Error fetching user details:', data);
            }
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };
    fetchUserData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/updateUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, felhasznaloId: id })
      });
      if (response.ok) {
        alert('A felhasználó sikeresen módosítva!');
        navigate('/users');
      } else {
        alert('Hiba történt a felhasználó módosítása során.');
      }
    } catch (error) {
      console.error('Hiba történt:', error);
      alert('Hiba történt a felhasználó módosítása során.');
    }
  };
  
  return (
    <div id='registration'>
      <div className="reg-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Adatok módosítása</h1>
          <p>Kérjük módosítsa az adatait az adatait</p>
          <div className="input-box">
            <input
              type="text"
              id="Vezeteknev"
              name="Vezeteknev"
              placeholder="Vezetéknév"
              value={formData.Vezeteknev}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="Keresztnev"
              name="Keresztnev"
              placeholder="Keresztnév"
              value={formData.Keresztnev}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="FelhasznaloNev"
              name="FelhasznaloNev"
              placeholder="Felhasználónév"
              value={formData.FelhasznaloNev}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              id="Jelszo"
              name="Jelszo"
              placeholder="Jelszó"
              value={formData.Jelszo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="E-mail"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="date"
              id="SzuletesiDatum"
              name="SzuletesiDatum"
              placeholder="Születési Dátum"
              value={formData.SzuletesiDatum}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="Neme"
              name="Neme"
              placeholder="Nem"
              value={formData.Neme}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="Iranyitoszam"
              name="Iranyitoszam"
              placeholder="Irányítószám"
              value={formData.Iranyitoszam}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="Varos"
              name="Varos"
              placeholder="Város"
              value={formData.Varos}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="UtcaHazszam"
              name="UtcaHazszam"
              placeholder="Utca, Házszám"
              value={formData.UtcaHazszam}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="Foglalkozasa"
              name="Foglalkozasa"
              placeholder="Foglalkozás"
              value={formData.Foglalkozasa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="IskolaiVegzettsege"
              name="IskolaiVegzettsege"
              placeholder="Iskolai végzettség"
              value={formData.IskolaiVegzettsege}
              onChange={handleChange}
              required
            />
          </div>
          <div className="buttons">
            <button type="submit" className="btn-reg">Elküld</button>
            <Link to="/users" className="btn-back">Vissza</Link>
          </div>
        </form>
      </div>
    </div>
  );


}
export default UpdateUser;
