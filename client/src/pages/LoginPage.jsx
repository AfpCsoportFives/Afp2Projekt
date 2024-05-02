import React from 'react'

function LoginPage() {
  return (
    <div id="login">
        <div className="login-wrapper">
            <form action="#" method="post">
                <h1>Bejelentkezés</h1>
                <div className="input-box">
                    <input type="text" placeholder="Felhasználónév" />
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Jelszó" />
                    <i className="fa-solid fa-lock"></i>
                </div>
                <div className="forgot-password">
                    <a href="#">Elfelejtette jelszavát ?</a>
                </div>
                <button type="submit" class="btn-login">Bejelentkezés</button>
                <div className="register-link">
                    <p>Nincs még regisztrálva ? <br /> <a href="registration.html">Regisztráció</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage