import React, { useState } from 'react';

function AddNewEvent() {
  const [formData, setFormData] = useState({
    RendezvenyNeve: '',
    RendeznenyIdopontja: '',
    EloadoNeveTitulusa: '',
    RendezvenyTemaja: '',
    RendezvenyTipusa: '',
    RendezvenyHelyszine: '',
    RendezvenyLeirasa: '',
    SzabadHelyekSzama: ''
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
    // Konvertáljuk a SzabadHelyekSzama értékét numerikussá, ha lehetséges
    const updatedFormData = {
      ...formData,
      SzabadHelyekSzama: formData.SzabadHelyekSzama ? parseInt(formData.SzabadHelyekSzama) : 0
    };

    try {
      const response = await fetch('http://localhost:5000/createevent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFormData)
      });
      if (response.ok) {
        alert('Rendezvény sikeresen hozzáadva!');
        setFormData({
          RendezvenyNeve: '',
          RendeznenyIdopontja: '',
          EloadoNeveTitulusa: '',
          RendezvenyTemaja: '',
          RendezvenyTipusa: '',
          RendezvenyHelyszine: '',
          RendezvenyLeirasa: '',
          SzabadHelyekSzama: ''
        });
      } else {
        alert('Hiba történt a rendezvény hozzáadása során.');
      }
    } catch (error) {
      console.error('Hiba történt:', error);
      alert('Hiba történt a rendezvény hozzáadása során.');
    }
  };

  return (
    <div id='registration'>
      <div className="reg-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Rendezvény hozzáadása</h1>
          <p>Kérjük adja meg a rendezvény adatait</p>
          <div className="input-box">
            <input
              type="text"
              id="RendezvenyNeve"
              name="RendezvenyNeve"
              value={formData.RendezvenyNeve}
              onChange={handleChange}
              placeholder="Rendezvény neve"
              required
            />
            <i className="fa-solid fa-calendar"></i>
          </div>
          <div className="input-box">
            <input
              type="datetime-local"
              id="RendeznenyIdopontja"
              name="RendeznenyIdopontja"
              value={formData.RendeznenyIdopontja}
              onChange={handleChange}
              placeholder="Rendezvény időpontja"
              required
            />
            <i className="fa-solid fa-clock"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="EloadoNeveTitulusa"
              name="EloadoNeveTitulusa"
              value={formData.EloadoNeveTitulusa}
              onChange={handleChange}
              placeholder="Előadó neve és titulusa"
              required
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="RendezvenyTemaja"
              name="RendezvenyTemaja"
              value={formData.RendezvenyTemaja}
              onChange={handleChange}
              placeholder="Rendezvény témája"
              required
            />
            <i className="fa-solid fa-book"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="RendezvenyTipusa"
              name="RendezvenyTipusa"
              value={formData.RendezvenyTipusa}
              onChange={handleChange}
              placeholder="Rendezvény típusa"
              required
            />
            <i className="fa-solid fa-tags"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="RendezvenyHelyszine"
              name="RendezvenyHelyszine"
              value={formData.RendezvenyHelyszine}
              onChange={handleChange}
              placeholder="Rendezvény helyszíne"
              required
            />
            <i className="fa-solid fa-map-marker-alt"></i>
          </div>
          <div className="input-box">
            <textarea
              id="RendezvenyLeirasa"
              name="RendezvenyLeirasa"
              value={formData.RendezvenyLeirasa}
              onChange={handleChange}
              placeholder="Rendezvény leírása"
              required
            />
            <i className="fa-solid fa-align-left"></i>
          </div>
          <div className="input-box">
            <input
              type="number"
              id="SzabadHelyekSzama"
              name="SzabadHelyekSzama"
              value={formData.SzabadHelyekSzama}
              onChange={handleChange}
              placeholder="Szabad helyek száma"
              required
            />
            <i className="fa-solid fa-chair"></i>
          </div>
          <button type="submit" className="btn-reg">Elküld</button>
        </form>
      </div>
    </div>
  );
}

export default AddNewEvent;
