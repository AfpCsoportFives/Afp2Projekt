import React from 'react'

function UpdateUser() {
  return (
<<<<<<< Updated upstream
    <div id='registration'> 
        <div className="reg-wrapper">
            <form action="#" method="post">
                <h1>Adatok módosítása</h1>
                <p>Kérjük módosítsa az adatait az adatait</p>
                <div className="input-box">
                    <input type="text" id="username" name="username" placeholder="Felhasználónév"/>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="input-box">
                    <input type="password" id="password" name="password" placeholder="Jelszó" />
                    <i className="fa-solid fa-lock"></i>
                </div>
                <div class="input-box">
                    <input type="email" id="email" name="email" placeholder="E-mail" />
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="input-box">
                    <input type="text" id="habitation" name="habitation" placeholder="Lakóhely" />
                    <i className="fa-solid fa-home"></i>
                </div>
                <div className="input-box-dropdown">
                    <select name="gender">
                        <option value="" selected disabled hidden>Válasszon nemet</option>
                        <option value="male">Férfi</option>
                        <option value="female">Nő</option>
                        <option value="other">Egyéb</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="input-box">
                    <input type="text" id="job" name="job" placeholder="Foglalkozás" />
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="input-box">
                    <input type="text" id="scoolar" name="scoolar" placeholder="Iskolai végzettség" />
                    <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h5>Születési dátum</h5>
                <div className="input-box-date">
                    <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="Születési dátum" />
                    <i className="fa-solid fa-calendar-alt"></i>
                </div>
                <br />
                <button type="submit" className="btn-reg">Elküld</button>
            </form>
        </div>
=======
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
>>>>>>> Stashed changes
    </div>
  )
}

export default UpdateUser