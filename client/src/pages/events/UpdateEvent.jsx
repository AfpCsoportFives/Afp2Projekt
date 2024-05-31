import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    RendezvenyNeve: '',
    RendezvenyIdőpontja: '',
    EloadoNeveTitulusa: '',
    RendezvenyTemaja: '',
    RendezvenyTipusa: '',
    RendezvenyHelyszine: '',
    RendezvenyLeirasa: '',
    SzabadHelyekSzama: ''
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/listevent/${id}`);
        const data = await response.json();
        if (data.success) {
          setFormData(data.event);
        } else {
          console.error('Failed to fetch event details');
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();
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
    const updatedFormData = {
      ...formData,
      SzabadHelyekSzama: formData.SzabadHelyekSzama ? parseInt(formData.SzabadHelyekSzama) : 0
    };
    try {
      const response = await fetch(`http://localhost:5000/updateEvent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedFormData, RendezvenyId: id })
      });
      if (response.ok) {
        alert('Rendezvény sikeresen módosítva!');
        navigate('/events');
      } else {
        alert('Hiba történt a rendezvény módosítása során.');
      }
    } catch (error) {
      console.error('Hiba történt:', error);
      alert('Hiba történt a rendezvény módosítása során.');
    }
  };

  return (
    <div id='registration'>
      <div className="reg-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Rendezvény módosítása</h1>
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
              id="RendezvenyIdőpontja"
              name="RendezvenyIdőpontja"
              value={formData.RendezvenyIdőpontja}
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
          <br></br>
          <br></br>
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
          <div className="buttons">
            <button type="submit" className="btn-reg">Elküld</button>
            <Link to="/events" className="btn-back">Vissza</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEvent;