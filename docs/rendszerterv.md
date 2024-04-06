# Rendszerterv


## 1. Rendszer célja
A jegykezelő alkalmazás célja, hogy lehetővé tegye a rendezvényszervezői vállalkozásnak a rendezvények hatékony kezelését és a felhasználók számára egyszerű és gyors jegyfoglalást. Az alkalmazásnak az alábbi fő célokat kell teljesítenie:

1. Felhasználói regisztráció és bejelentkezés
A felhasználóknak lehetőséget kell biztosítani a regisztrációra és bejelentkezésre.
A bejelentkezett felhasználóknak különböző jogosultságokat kell biztosítani az alkalmazás használatához.
2. Rendezvények kezelése
A rendszer lehetővé kell tennie új rendezvények hozzáadását, meglévő rendezvények módosítását és törlését.
A rendezvényeket különböző tulajdonságokkal, például címmel, dátummal, helyszínnel és részletekkel kell rendelkezniük.
3. Jegyfoglalás
A felhasználóknak lehetőséget kell biztosítani a rendezvényekre való jegyfoglalásra.
A foglalásoknak tartalmazniuk kell a felhasználó nevét és a rendezvény adatait.
4. Felhasználók kezelése
Az adminisztrátoroknak lehetőséget kell biztosítani új felhasználók hozzáadására, meglévő felhasználók módosítására és törlésére.
A felhasználók adatait biztonságosan kell tárolni és kezelni.
5. Felhasználói felület
Az alkalmazásnak intuitív és felhasználóbarát felhasználói felülettel kell rendelkeznie.
A felhasználóknak könnyen hozzáférhető navigációs rendszerrel kell rendelkezniük a funkciókhoz és menükhöz.

## 2. Projektterv

2.1. Projektszerepkörök
Scrum master: Lecza Tamás
Product owner
Üzleti szereplők
Megrendelő

2.2 Projektmunkások és felelőségeik
Frontend: (Feladatuk weboldal kinézetének az elkészítése, illetve a megrendelő által igényelt funkciók megvalósítása)
Bakos Zsolt
Lecza Tamás
Backend: (Feladatuk az adatbázis kialakítása illetve abból az adatok kiszolgálása a frontend számára)
Andorfer katalin
Bezdán Anita
Kalmár János
Spengler András
Tesztelés:
Andorfer katalin
Bakos Zsolt
Bezdán Anita
Kalmár János
Lecza Tamás
Spengler András

2.3 Ütemterv

Követelmény specifikáció	
Funkcionális specifikáció
Rendszerterv
Adatmodell megtervezése	
Adatbázis megvalósítása a szerveren
Backend: Route & controllers elkészítése
Backend: Adatbázis kapcsolat megvalósítása	
Backend: Adatfeladolgozó funkciók megvalósítása
Website	Képernyőtervek elkészítése
Website	Prototípus elkészítése
Website	Adatbázis létrehozása
Website	Menüstruktúra elkészítése
Website	Kezdőlap funkciók elkészítése	
Website	Felhasználói felület elkészítése
Website	Alkalmazottak felület elkészítése
Website	Adminisztrátori felület elkészítése
Website	Tesztelés

2.4 Mérföldkövek
A prototipus bemutatása
Az elkészült szoftver átadása


## 6. Fizikai környezet

Fizikai környezet
Frontend felületet React, a backend felületet NodeJS biztosítja.

1. Vásárolt szoftverkomponensek és külső rendszerek
Nincsenek vásárolt szoftverkomponensek.
2. Hardver és hálózati topológia
Az alkalmazás webplatformra készül, bármilyen oprendszeren futtatható.
Internet böngészőn keresztül érhető el a felhasználó felület.
Szerverhez interneten keresztül lehet csatlakozni.
3. Fizikai alrendszerek
Webszerver: 80-as porton elérhető HTTP szolgáltatás
Mysql adatbázis szerver
Kliens gépek: a követelményeknek megfelelő internet böngésző futtatására alkalmas PC-k.
4. Fejlesztő eszközök
Visual Studio Code
Notepad++
Git
JUnit 
Selenium
5. Keretrendszer
React, NodeJS, Mysql

## 7. Adatbázis terv

A projekt adatbázisaként mysql fog szolgálni, amiben a következőképpen alakulnak a táblák:

user:
- id
- email
- password
- active
- connectDate
- admin

rendezveny:
- id
- name
- date
- description

foglalas:
- id
- userId
- rendezvenyId
- createdDate

meghivo:
- id
- meghivoUserId
- meghivottEmail
- createdDate
- jovahagyott
