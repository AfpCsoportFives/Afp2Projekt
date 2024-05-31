import React from 'react'

function AddNewUser() {

    const [formData, setFormData] = useState({
        felhasznalokId:'',	
        Vezeteknev: '', 	
        Keresztnev: '',	
        Felhasznalonev: '',	
        Jelszo: '',	
        Email: '',
        SzuletesiDatum: '',
        Neme: '', 	
        Iranyitoszam: '', 	
        Varos: '', 	
        UtcaHazszam:'',
        Foglalkozasa:'',	
        IskolaiVegzettsege:'',	
        RegisztracioDatuma:'',
        FelhasznaloStatusza:'',	
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
        // Konvertáljuk a SzabadHelyekSzama értékét numerikussá, ha lehetséges
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
                felhasznalokId: null,
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
                Cookie: null,
                CookieExpire: null
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
                <input type="text" id="Vezeteknev" name="Vezeteknev" placeholder="Vezetéknév" required/>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-box">
                <input type="text" id="Keresztnev" name="Keresztnev" placeholder="Keresztnév" required/>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-box">
                <input type="text" id="Neme" name="Neme" placeholder="Nem" required/>
                <i className="fa-solid fa-venus-mars"></i>
            </div>
            <div className="input-box">
                <input type="date" id="SzuletesiDatum" name="SzuletesiDatum" placeholder="Születési Dátum" required/>
                <i className="fa-solid fa-calendar-alt"></i>
            </div>
            <div className="input-box">
                <input type="text" id="IskolaiVegzettsege" name="IskolaiVegzettsege" placeholder="Iskolai végzettség" required/>
                <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="input-box">
                <input type="text" id="Foglalkozasa" name="Foglalkozasa" placeholder="Foglalkozás" required/>
                <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className="input-box">
                <input type="text" id="Varos" name="Varos" placeholder="Város" required/>
                <i className="fa-solid fa-city"></i>
            </div>
            <div className="input-box">
                <input type="text" id="Iranyitoszam" name="Iranyitoszam" placeholder="Irányítószám" required/>
                <i className="fa-solid fa-map-marker-alt"></i>
            </div>
            <div className="input-box">
                <input type="text" id="UtcaHazszam" name="UtcaHazszam" placeholder="Utca, Házszám" required/>
                <i className="fa-solid fa-road"></i>
            </div>
            <div className="input-box">
                <input type="text" id="FelhasznaloNev" name="FelhasznaloNev" placeholder="Felhasználónév" required/>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-box">
                <input type="password" id="Jelszo" name="Jelszo" placeholder="Jelszó" required/>
                <i className="fa-solid fa-lock"></i>
            </div>
            <div className="input-box">
                <input type="email" id="Email" name="Email" placeholder="E-mail" required/>
                <i className="fa-solid fa-envelope"></i>
            </div>
            <br />
            <button type="submit" className="btn-reg">Elküld</button>
        </form>
    </div>
</div>

  )
}

export default AddNewUser