# Funckionális specifickáció

## 1. Jelenlegi helyzet leírása
A cégünket megbízó rendezvényszervezői vállalkozásban jelenleg használt jelentkezés módja elavult, és nem megbízható. Általában az egyes események saját oldalain történik a regisztráció, azonban a csapatunkat felkérő rendezvényszervezői vállalkozás számára ilyen formán problémás jelentkezők nyomon követése, valamint egyes statisztikák elkészítése. Így egy olyan weboldalt szeretne, ahol a felhasználók regisztrációt és bejelentkezést követően a különböző rendezvényekre maguknak foglalhatnak helyet, illetve lemondhatják a már foglalt helyeket. A megrendelő célja, hogy az általunk elkészített weboldalon a lehető legtöbb helyet foglalják le az ingyenes rendezvényekre.

## 2. Vágyálomrendszer leírása
A megrendelő olyan weboldalt vár el csapatunktól, mely felületen a felhasználói regisztráció után az eseményekre és a rendezvényekre való jelentkezés egy kattintással elérhető. Fontos, hogy a jelentkezés minden esetben regisztrációhoz kötött.
A weboldalon admin jogosultsággal rendelkezők statisztikákat készíthetnek különböző szociográfiai adatokra vonatkozóan, mint lakóhely, életkor, legmagasabb iskolai végzettség valamint foglalkozás. A weboldalon szükség van a jelentkezések módosításának és törlésének lehetőségére is.

## 3. Jelenlegi üzleti folyamatok modellje

A jelenlegi folyamat a következő:

1. A rendezvényszervező cég létrehoz egy eseményt, és közzéteszi a weboldalán.
2. A felhasználók az esemény oldalára látogatnak, és kitöltik a regisztrációs űrlapot.
3. A regisztrációs űrlap adatait manuálisan rögzítik a rendezvényszervezők.
4. A rendezvényszervezők e-mailben értesítik a regisztrált felhasználókat a részletekről.
5. A felhasználók a rendezvény napján megjelennek a helyszínen.

A folyamat problémái:

- A manuális regisztráció időigényes és hibalehetőségeket hordoz magában.
- Nehéz nyomon követni a jelentkezőket és statisztikákat készíteni.
- A regisztráció nem megbízható, a felhasználók bármikor lemondhatják a részvételt e-mailben.

## 4. Igényelt üzleti folyamatok modellje

A javasolt megoldás:

Egy új weboldal kifejlesztése, ahol a felhasználók regisztrációt és bejelentkezést követően a különböző rendezvényekre maguknak foglalhatnak helyet, illetve lemondhatják a már foglalt helyeket. A weboldal automatikusan rögzíti a regisztrációs adatokat, és statisztikákat készít a jelentkezőkről.

A javasolt megoldás előnyei:

- Hatékonyabb és megbízhatóbb regisztrációs folyamat.
- Könnyebb nyomon követni a jelentkezőket és statisztikákat készíteni.
- A felhasználók kényelmesebben foglalhatnak és mondhatnak le helyeket.

Online folyamatok user szintű egyének számára:
Amíg nem jelentkezik be a user vagy admin szintü felhasználó addig csak az alábbi menürendszer érhetőek el:

- Főmenü
- Regisztráció
- Be és kijelentkezés

User szintü felhasználó:
</br>
Helyfoglalás:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Egy addott esemény részletek gombjára klikkelve megjelenik 1 gomb feliratkozás</br>
</br>
Rendezvényről való leiratkozás:</br>
- Bejelentkezés: bejelentkezés menü => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Egy addott esemény részletek gombjára klikkelve megjelenik leiratkozás gomb ha a felhasználó már feliratkozott.

Admin szintü felhasználó:
</br>
Új felhasználó hozzáadása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Új felhasználó hozzáadása</br>
Felhasználó adatainak a módosítása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Felhasználók listázása => A kiválasztott felhasználóra kattintva => módosítás</br>
Felhasználó törlése:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Felhasználók listázása => A kiválasztott felhasználóra kattintva => törlés</br>
Felhasználók listázása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Felhasználó listázása</br>

Új rendezvény hozzáadása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények menü => Új rendezvény hozzáadása</br>
Rendezvény adatainak a módosítása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények listázása => R Módosítani kívánt rendezvény kiválasztása => rendezvény adatainak módosítása gomb => módosítása</br>
Rendezvény adatainak a törlése
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények listázása => R Módosítani kívánt rendezvény kiválasztása => rendezvény adatainak módosítása gomb => törlés</br>
Felhasználók listázása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények menü => Rendezvény listázása</br>

Rendezvény listázása

```mermaid
flowchart TD;
A("*Bármely* jogosultsággal belépés");
B("Rendezvény menü");
C("Rendezvény  listázása");

A-->B;
B-->C;

```

Új rendezvény felvitele
```mermaid
flowchart TD;
A("*Admin* jogosultsággal belépés");
B("Rendezvény menü");
C("Új esemény hozzáadása menü");
D("Adatok megadása");
E("Véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
```

Rendezvény adatainak módosítása

```mermaid
flowchart TD;
A("*Admin* jogosultsággal belépés");
B("Rendezvény menü");
C("Rendezvény listázása menü");
D("Rendezvény neve melletti szerkesztés gombra kattintás");
E("Adatok megadása");
F("véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
E-->F;
```

Rendezvény törlése

```mermaid
flowchart TD;
A("*Admin* jogosultsággal belépés");
B("Rendezvény menü");
C("Rendezvény listázása  menü");
D("Törölendő rendezvényre klikkelés");
E("Törlés gomb");

A-->B;
B-->C;
C-->D;
D-->E;

```

Felhasználó listázása

```mermaid
flowchart TD;
A("*Admin* jogosultsággal belépés");
B("Felhasználók menü");
C("Felhasználók listázása");

A-->B;
B-->C;

```

Új felhasználó hozzáadása

```mermaid
flowchart TD;
A("*Admin* jogosultsággal belépés");
B("Felhasználók menü");
C("Új felhasználó hozzáadása menü");
D("Adatok megadása");
E("Véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
```

Új felhasználó hozzáadása user szint

```mermaid
flowchart TD;
A("Regisztráció ");
B("Adatok megadása");
C("Véglegesítés");
A-->B;
B-->C;

```

Felhasználó adatainak módosítása

```mermaid
flowchart TD;
A("*Admin* jogosultsággal belépés");
B("Felhasználók menü");
C("Felhasználók listázása menü");
D("Modosítandó felhasználóra kattintás");
E("Módosítás gomb");
F("Adatok megadása");
G("véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
E-->F;
F-->G
```

Felhasználó törlése

```mermaid
flowchart TD;
A("*Admin* jogosultsággal belépés");
B("Felhasználó menü");
C("Felhasználó listázása  menü");
D("Törölendő Fehasználóra klikkelés");
E("Törlés gomb");

A-->B;
B-->C;
C-->D;
D-->E;

```

## 5. Követelménylista

| ID | Modul | Név | Leírás |
| :---: | --- | --- | --- |
| K01 | Bejelentkezés | Felhasználó adminisztrációja | Felhasználó regisztrálása, törlése az igényelt üzleti folyamatokban leírtak szerint. A felhasználó a felhasználói nevének, email címének és jelszavának megadásával tud regisztrálni. A jelszó tárolása kódolva történik az adatbázisban. Hiányos vagy a követelményeknek nem megfelelő adatok megadásakora rendszer értesíti a felhasználót.|
| K02 | Felület | Bejelentkezési felület | Nem megfelelő email cím vagy jelszó megadása esetén, a felhasználó hibaüzenetet kap. |
| K03 | Módosítás/törlés | Felhasználónév módósítása | A felhasználó módosíthatja saját Felhasználónevét, amihez a régi és az új felhasználók megadása szükséges, az új megerősítése, valamint a felhasználó jelszavának megadása. |
| K04 | Módosítás/törlés | Felhasználó jelszavának módosítása | A felhasználó módosítani tudja saját jelszavát, a régi és az új jelszavának megadásával, valamint az új megerősítésével.|
| K05| Módosítás/törlés | Elfelejtett felhasználónév / jelszó | Amikor a felhasználó elfelejti a felhasználónevét, vagy jelszavát akkor ezzel az Adminhoz tud fordulni. |
| K06 | Rendezvények | Rendezvények adminisztrációja | Rendezvények létrehozása, törlése az igényelt üzleti folyamatokban leírtak szerint.
| K07 | Foglalás | Foglalás adminisztrációja | Foglalás folyamatának kezelése a szükséges üzleti folyamatokban leírtak szerint. | 
| K08 | Felület | Egyszerűen használható kezelőfelület | A legelterjedtebb internet böngészőkből használható felület megvalósítása az admin számára. |
| K09 | Rendezvények | Online elérhető nyilvános rendezvények listája | Online elérhető nyilvános rendezvények listája, de a résztvétel regisztrációhoz kötött. |
| K010 | Funkció | Platformfüggetlen, robusztus működés | Szabványos, az iparágban folyamatosan bevált operációs rendszertől független technológiák használata: Php, React, Node js, MySQL. |
| K011 | Funkció | Költséghatékony üzemeltetés | A szabványos és elterjedt technológiák használatát biztosítja. |
| K012 | Funkció | Bővíthetőség | A kezelt adatok mennyiségének, valamint a felhasználók számának bővíthetősége és utólag újabb funkciók hozzáadásának lehetőségének biztosítása. |

## 6. Használati esetek
A rendszer használói a következők:

* felhasználó (meghívott vendég)
* adminisztrátor

A rendszernek a következő funkciókat kell ellátnia:

* az adminisztrátorok tudjanak eseményeket és rendezvényeket létrehozni és törölni
* az adminisztrátorok tudjanak meghívókat küldeni
* az adminisztrátorok tudjanak statisztikát készíteni a QR kódos leolvasás alapján
* az adminisztrátorok tudjanak meghívókat jóváhagyni
* a felhasználók belépés után meg tudják nézni az események és rendezvények részleteit

Előfeltételek:

* adminisztrátorok és felhasználók részére a rendszer használatához jogosultság, azaz jelszó szükséges
* felhasználóknak az alkalmazás használatához regisztráció szükséges

## 7. Megfeleltetés, hogyan fedik le a használati esetek a követelményeket
* K01, K02, K03: Az alkalmazást úgy hozzuk létre, hogy tartalmazza az események és rendezvények adminisztrációját, melyet az adminisztrátorok felhasználó név/jelszó megadásával a rendszerbe belépve fognak elérni. Ezek fogják adni az alkalmazás fő funkcióit.
* K04: Különböző jogosultsági szinteket fogunk kialakítani. Az adminisztrátori jogosultsággal rendelkezők minden funkcióhoz hozzá fognak férni, felhasználói (meghívott vendég) fiókokat tudnak létrehozni/törölni. Az adminisztrátorok jogosultságuk függvényében a felületre belépve listákat és kimutatásokat tudnak majd lekérni.
* K05: A felhasználói felületet úgy alakítjuk ki, hogy egy általános weboldal képét nyújtsa, továbbá, hogy az egyes funkciók egyértelmű elnevezésével könnyen elérhetőek és érthetőek lesznek.
* K06: A web alkalmazást úgy hozzuk létre, hogy az online felületen keresztül lehessen keresni a nyilvánosan elérhető események és rendezvények között az adatbázisban. A részvétel azonban kizárólag a rendszerbe való regisztráció után lehetséges.
* K07: A rendszer elkészítésekor ügyelünk a platformfüggetlen, robosztus működés kialakítására, ezért ellenőrizzük kódunk helyességét, hogy egy adott HTML elemet támogatják-e a böngészők, fontosabb alkalmazások és kisegítő technológiák. A HTML vizsgálatba beleértjük a CSS vizsgálatot is. A teszteléseket elvégezzük Firefox, Chrome, Explorer, Opera, Safari böngészőkön, ill. Windows, Linux, iOs operációs rendszereken is.
* K08: A szabványos és elterjedt technológiák használata biztosítja.
* K09: A kezelt adatokat MYSQL adatbázisban fogjuk tárolni. Az adatbázis használatával biztosítjuk az adatok bővíthetőségét. Az alkalmazást PHP objektum orientált módon valósítjuk meg, amellyel új funkciókat könnyedén tudunk utólag hozzáadni a rendszerhez.

## 8. Képernyőtervek
Login screen
![alternatív szöveg](https://raw.githubusercontent.com/AfpCsoportFives/Afp2Projekt/main/docs/L%C3%A1tv%C3%A1nyterv/Admin/Login.jpg)

Rendezvények nézet
![alternatív szöveg](https://raw.githubusercontent.com/AfpCsoportFives/Afp2Projekt/main/docs/L%C3%A1tv%C3%A1nyterv/User/Rendezv%C3%A9nyek.jpg)

Egy rendezvényről részletesen
![alternatív szöveg](https://raw.githubusercontent.com/AfpCsoportFives/Afp2Projekt/main/docs/L%C3%A1tv%C3%A1nyterv/User/Rendezv%C3%A9ny%20b%C5%91vebben.jpg)

Admin oldali statisztika
![alternatív szöveg](https://raw.githubusercontent.com/AfpCsoportFives/Afp2Projekt/main/docs/L%C3%A1tv%C3%A1nyterv/Admin/Statisztika%20b%C5%91vebben.jpg)

## 9. Forgatókönyvek

A weboldalnak két szereplője van a Felhasználó és az admin. 

**Felhasználó:**

A **_Bejelentkező képernyőre_** talál minden felhasználó legelőször, amelyen a rendezvényszervező cég logója, a már regisztrált felhasználók számára a bejelentkezési felület (Felhasználó név, jelszó, bejelentkezés) illetve az újonnan regisztrálni kívánó felhasználók számára a regisztrációs gomb található.

Amennyiben a Felhasználó az által bejelentkezéskor megadott e-mail cím vagy jelszó helytelen, azaz a bejelentkezés sikertelen a felhasználó hibaüzenetet kap. 

A **_Regisztráció_** során a Felhasználó kitölti a szükséges adatokat: Felhasználónév, e-mail cím, jelszó, lakhely, nem, foglalkozás, születési dátum, iskolai végzettség.  

Ha a regisztráció során valamelyik adat hiányzik vagy nem felel meg a követelményeknek, akkor a rendszer értesíti erről a Felhasználót. 

Ha a regisztrált Felhasználó elfelejti a felhasználónevét vagy jelszavát akkor ezzel az Admint kell megkeresnie.

A Felhasználó számára a sikeres bejelentkezés vagy regisztráció után láthatóvá válik a **_Rendezvények képernyő_**, amelynek a navigációs sávja a Rendezvényeken kívül tartalmazza a Saját rendezvényeim, Profilom, Kijelentkezés menüpontokat.

* **Rendezvények**: azoknak a rendezvényeknek a listája, amely megrendezésre fognak kerülni, amelyekre lehet jelentkezni és amelyek részletes leírása a rendezvény nevére kattintva érhető el.
* **Saját rendezvényeim**: tartalmazza azokat a rendezvényeket amire a Felhasználó már jelentkezett, itt van mód a lejelentkezni azokról a rendezvényekről, amikre előzőleg már jelentkezett a Felhasználó
* **Profilom**: azokat az adatokat tartalmazza, amelyeket a Felhasználó regisztráció során megadott, ebben a menüpontban tudja a Felhasználó módosítani a regisztráció során megadott adatait, felhasználónevét, jelszavát
* **Kijelentkezés**: kilépés a saját profilból
  
A Rendezvények nevére kattintva megjelennek a rendezvényre vonatkozó részletes adatok:
* Előadó
* Téma címszó
* Rendezvény dátuma
* Rendezvény megrendezésének módja
* Rövid leírás a rendezvény témájáról
  
**Admin:**

Ugyan az a Bejelentkező képernyő, mint a Felhasználó esetében, bejelentkezni az Admin felhasználónévvel és jelszóval tud.
Az Adminnak van jogosultsága a Felhasználók adatainak módosítására, Felhasználók törlésére, a Felhasználók listázására, új rendezvények létrehozására, a meglévő rendezvények adatainak módosításra, rendezvények törlésére, rendezvények listázására, a rendezvényre jelentkező, a rendezvényen részvevők adataiból különböző statisztikák készítésére

_**Statisztikák:**_

* rendezvényre jelentkezők száma

* rendezvényen részvevők szám

* regisztrált Felhasználók adataiból készült statisztikák: életkori, lakhely szerinti, iskolai végzettségre vonatkozó, nem szerinti, foglalkozás szerinti

* rendezvényen résztvevő Felhasználók adataiból készült statisztikák: életkori, lakhely szerinti, iskolai végzettségre vonatkozó, nem szerinti, foglalkozás szerinti


## 10. Funkció - követelmény megfeleltetése

| Id | Követelmény | Funkció |
| :---: | --- | --- |
| K01 | Felhasználó adminisztrációja | Felhasználói adminisztráció funkcióinak kialakítása. |
| K02 | Bejelentkezési felület | A felhasználói felület megvalósítása szabványos html, css és javascript technológiák felhasználásával, a képernyőtervek fejezetben láthatóan módon szerint. |
| K03 | Felhasználónév módósítása | Felhasználóbarát felület kialakítása. |
| K04 | Felhasználó jelszavának módosítása | Mind az admin, mind pedig a felhasználói felületen fejlesztendő funkciók. |
| K05 | Elfelejtett felhasználónév / jelszó | Mind az admin, mind pedig a felhasználói felületen fejlesztendő funkciók. |
| K06 | Rendezvények adminisztrációja | Rendezvények létrehozásának, törlésének és módosításának funkciói. |
| K07 | Foglalás adminisztrációja | Foglalási folyamat optimális kialakítása. |
| K08 | Egyszerűen használható kezelőfelület | A program funkciója a legfontosabb, de az is egy kihagyatlan rész, hogy kinézete és használata is egyszerű, felhasználóbarát legyen. |
| K09 | Online elérhető nyilvános rendezvények listája | A honlapon elérhető és kereshető lesz az események katalógusa a látogatók számára bejelentkezés nélkül is. |
| K010 | Platformfüggetlen, robusztus működés | Rendszerfüggetlen használat. |
| K011 | Költséghatékony üzemeltetés | Szabványos, elterjedt paltformfüggetlen technológiák használata. |
| K012 | Bővíthetőség | Adatbáziskezelő rendszer használata, a tervezésnél figyelembe vesszük a későbbi bővítési igényeket, továbbá fontos az utólagos újabb funkciók hozzáadása. |


## 11. Fogalomszótár

* Felhasználó: Rendezvényen résztvevő, aki előzetesn regisztrál, a regisztráció során megadja a különböző statisztikák leszűréséhez szükséges adatokat, mint lakóhely, életkor, legmagasabb iskolai végzettség valamint foglalkozás.

* Admin: Kezeli a felhasználói adatokat, javítja az esetleges hibás regisztrációkat, kezeli a rendezvényekkel kapcsolatos válzozásokat, elvégzi az új rendezvények létrehozását, leszűri a kívánt statisztikákat.
       
* Bejelentkezési felület: A felhasználó előzetesen regisztrált felhasználónévvel és jelszóval tud bejelentkezni.

* Rendezvény: Meghirdetett esemény, amelyen előzetes regisztrációval lehet részt venni.

* Statisztika: A regisztrált résztvevők által megadott adatokból, különböző lekérdezések által létrehozott kimutatások.

* SQL: Az SQL a Strukturált Lekérdezési Nyelv rövidítése. Egy speciális nyelv, amelyet relációs adatbázisokkal való kommunikációra használnak az adatok létrehozásához, olvasásához, frissítéséhez és törléséhez.

* HTML: A HTML a HyperText Markup Language rövidítése. Ez egy olyan jelölőnyelv, amelyet weboldalak tartalmának és szerkezetének leírására használnak.

* PHP: A PHP a Hypertext Preprocessor rövidítése. Szerveroldali szkriptnyelv, weboldalak dinamikus tartalmának generálására használják. Beágyazható HTML-be, és adatbázisokkal, fájlkezeléssel és más funkciókkal is képes kommunikálni.

* CSS: A CSS a Cascading Style Sheets rövidítése. Ez egy stíluslap nyelv, melyet weboldalak megjelenésének definiálására használnak. Leválasztja a tartalmat (HTML) a megjelenítéstől, lehetővé téve a weboldalak kinézetének könnyű módosítását anélkül, hogy a tartalom módosulna.
