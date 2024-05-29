import React, { useState } from 'react';

function AddNewEvent() {
  const [formData, setFormData] = useState({
    rendezvenyNeve: '',
    rendezvenyIdopontja: '',
    eloadoNeveTitulusa: '',
    rendezvenyTemaja: '',
    rendezvenyTipusa: '',
    rendezvenyHelyszine: '',
    rendezvenyLeirasa: '',
    szabadHelyekSzama: ''
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
    try {
      const response = await fetch('https://api.example.com/events', { // Cseréld ki az API URL-t a megfelelőre
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Rendezvény sikeresen hozzáadva!');
        setFormData({
          rendezvenyNeve: '',
          rendezvenyIdopontja: '',
          eloadoNeveTitulusa: '',
          rendezvenyTemaja: '',
          rendezvenyTipusa: '',
          rendezvenyHelyszine: '',
          rendezvenyLeirasa: '',
          szabadHelyekSzama: ''
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
              id="rendezvenyNeve"
              name="rendezvenyNeve"
              value={formData.rendezvenyNeve}
              onChange={handleChange}
              placeholder="Rendezvény neve"
              required
            />
            <i className="fa-solid fa-calendar"></i>
          </div>
          <div className="input-box">
            <input
              type="datetime-local"
              id="rendezvenyIdopontja"
              name="rendezvenyIdopontja"
              value={formData.rendezvenyIdopontja}
              onChange={handleChange}
              placeholder="Rendezvény időpontja"
              required
            />
            <i className="fa-solid fa-clock"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="eloadoNeveTitulusa"
              name="eloadoNeveTitulusa"
              value={formData.eloadoNeveTitulusa}
              onChange={handleChange}
              placeholder="Előadó neve és titulusa"
              required
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="rendezvenyTemaja"
              name="rendezvenyTemaja"
              value={formData.rendezvenyTemaja}
              onChange={handleChange}
              placeholder="Rendezvény témája"
              required
            />
            <i className="fa-solid fa-book"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="rendezvenyTipusa"
              name="rendezvenyTipusa"
              value={formData.rendezvenyTipusa}
              onChange={handleChange}
              placeholder="Rendezvény típusa"
              required
            />
            <i className="fa-solid fa-tags"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              id="rendezvenyHelyszine"
              name="rendezvenyHelyszine"
              value={formData.rendezvenyHelyszine}
              onChange={handleChange}
              placeholder="Rendezvény helyszíne"
              required
            />
            <i className="fa-solid fa-map-marker-alt"></i>
          </div>
          <div className="input-box">
            <textarea
              id="rendezvenyLeirasa"
              name="rendezvenyLeirasa"
              value={formData.rendezvenyLeirasa}
              onChange={handleChange}
              placeholder="Rendezvény leírása"
              required
            />
            <i className="fa-solid fa-align-left"></i>
          </div>
          <div className="input-box">
            <input
              type="number"
              id="szabadHelyekSzama"
              name="szabadHelyekSzama"
              value={formData.szabadHelyekSzama}
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
