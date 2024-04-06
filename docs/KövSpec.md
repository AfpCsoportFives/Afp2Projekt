# Követelmény Specifikáció

## 1. Jelenlegi helyzet

A cégünket megbízó rendezvényszervezői vállalkozás azzal a feladattal bízta meg, hogy készítsünk számára egy olyan 
weboldalt, ahová regisztrálás, majd bejelentkezés után a felhasználó különböző rendezvényekre foglalhat magának helyet vagy ha már foglalt akkor le is tud róla iratkozni. A megrendelőnek ez egy teljesen új vállalkozása lenne és az lenne a célja, hogy az általunk elkészített weboldalon a lehető legtöbb helyet foglaljanak le. Ezek olyan rendezvények, amelyek mindenki számára ingyenes.

## 2. Vágyálomrendszer leírása 

A megrendelő olyan weboldat szeretne, ahol ott regisztrált rendezvényekre a felhasználói jogosultsággal rendelkező már bejelentkezett user egy kattintással tudjon magának helyet foglalni. Ehhez a felhasználónak előbb regisztrálnia kell magát.</br>
A weboldalon két típusú felhasználó lesz:</br>
    
- Admin
- User</br>

Admin szintü felhasználó jogai:</br>

- Új rendezvény hozzáadása
- Rendezvény adatainak a módosítása
- Rendezvény törlése
- Rendezvény listázása

- Új felhasználó hozzáadása (admin szintű és user szintű)
- Felhasználó adatainak a módosítása (admin szintű és user szintű)
- Felhasználó törlése (admin szintű és user szintű)
- Felhasználók listázása

User szintü felhasználó jogai:</br>

- Összes rendezvény listázása 
- Egy rendezvény adataina a megjelenítése
</br>
A tervezett menürendszer bejelentkezés előtt bármely szintü jogosultággal rendelkező felhasználónak:

- Főmenü
- Regisztráció
- Bejelentkezés

A tervezett menürendszer bejelentkezés után user jogosultággal rendelkező felhasználónak:

- Főmenü
- Rendezvények listászása
- Kijelentkezés
  
A tervezett menürendszer bejelentkezés után admin jogosultággal rendelkező felhasználónak:

- Főmenü
- Rendezvények listászása
- Rendezvények -> Rendezvény hozzáadása, Rendezvény módosítása,Rendezvény törlése,
- Felhasználók -> Új felhasználó hozzáadása, Felhasználó adatainak a módosítása, Felhasználó törlése
- Felhasználók listázása
- Kijelentkezés

## 3. Jelenlegi üzleti folyamatok modellje

A jelenlegi üzleti folyamatok nincsenek, hiszen a cégünket megbízó vállalkozás teljesen újonnan alakult. 

## 4. Igényelt üzleti folyamatok modellje
Üzleti folyamatok: 

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
Uj felhasználó hozzáadása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Új felhasználó hozzáadása</br>
Felhasználó adatainak a módosítása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Felhasználók listázása => A kiválasztott felhasználóra kattintva => módosítás</br>
Felhasználó törlése:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Felhasználók listázása => A kiválasztott felhasználóra kattintva => törlés</br>
Felhasználók listázása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Felhasználók menü => Felhasználó listázása</br>

Uj rendezvény hozzáadása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények menü => Új rendezvény hozzáadása</br>
Rendezvény adatainak a módosítása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények listázása => R Módosítani kívánt rendezvény kiválasztása => rendezvény adatainak módosítása gomb => módosítása</br>
Rendezvény adatainak a törlése
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények listázása => R Módosítani kívánt rendezvény kiválasztása => rendezvény adatainak módosítása gomb => törlés</br>
Felhasználók listázása:</br>
- Bejelentkezés: bejelentkezés gomb => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Rendezvények menü => Rendezvény listázása</br>

Rendezvény Listázása

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


Felhasználó Listázása

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

Felhasználó  adatainak módosítása

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

test tomi

