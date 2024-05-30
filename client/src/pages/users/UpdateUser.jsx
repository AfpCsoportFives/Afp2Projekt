import React from 'react'

function UpdateUser() {
  return (
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
    </div>
  )
}

export default UpdateUser