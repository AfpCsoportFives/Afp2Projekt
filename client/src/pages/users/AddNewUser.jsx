import React, { useState } from 'react';

function AddNewUser() {
  const [formData, setFormData] = useState({
    felhasznalokId: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData
    };

    try {
      const response = await fetch('http://localhost:5000/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFormData)
      });
      if (response.ok) {
        alert('A felhasználó sikeresen hozzáadva!');
        setFormData({
          felhasznalokId: '',
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
      } else {
        alert('Hiba történt a felhasználó hozzáadása során.');
      }
    } catch (error) {
      console.error('Hiba történt:', error);
      alert('Hiba történt a felhasználó hozzáadása során.');
    }
  };

  return (
    <div id='registration'>
      <div className="reg-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Regisztráció</h1>
          <p>Kérjük adja meg az adatait</p>
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
          <div className="input-box">
            <input
              type="datetime-local"
              id="RegisztracioDatuma"
              name="RegisztracioDatuma"
              placeholder="Regisztráció dátuma"
              value={formData.RegisztracioDatuma}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button type="submit" className="btn-reg">Elküld</button>
        </form>
      </div>
    </div>
  );
}

export default AddNewUser;
