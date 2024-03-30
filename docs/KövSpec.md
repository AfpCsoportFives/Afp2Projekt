# Követelmény Specifikáció

## 1. Jelenlegi helyzet

A cégünket megbízó jegyértékesítési vállalkozás azzal a feladattal bízott meg minket, hogy készítsünk számára egy olyan 
weboldalt, ahová regisztrálás, majd bejelentkezés után különböző rendezvényekre lehessen jegyet vásárolni. A megrendelőnek ez egy teljesen új vállalkozása lenne és az lenne a célja, hogy az általunk elkészített weboldalon keresztül lehető legtöbb jegyet értékesítsen. 

## 2. Vágyálomrendszer leírása 

A megrendelőnek a jegyértékesítési weboldallal az a célja, hogy Magyaroszágon az ő által üzemeltetett weboldalon keresztül a lehető legtöbb jegyet értékesítse. A weboldalra az admin jogosultsággal rendelkező felhasználó eseményeket tud majd hozzáadni, törölni, módosítani. Minden 
eseményhez több jegytípust lehetne hozzárendelni, beárazni stb... 
A megrendelőnek az volt a kérése, hogy egy előzetes regisztráció után lehessen vásárolni a weboldalon, elöbb nem.</br>
A tervezett menürendszer bejelentkezés előtt bármely szintü jogosultággal rendelkező felhasználónak:

- Főmenü
- Rendezvények listászása
- Regisztráció
- Be és kijelentkezés

A tervezett menürendszer bejelentkezés után bármely user jogosultággal rendelkező felhasználónak:

- Főmenü
- Rendezvények listászása
- Jegyvásárlás
- Kijelentkezés
  
A tervezett menürendszer bejelentkezés után admin jogosultággal rendelkező felhasználónak:

- Főmenü
- Rendezvények listászása
- Rendezvények -> Rendezvény hozzáadása, Rendezvény módosítása,Rendezvény törlése,
- Jegyek -> Jegytípus hozzáadása, Jegytípus módosítása, Jegyzípus törlése
- Felhasználók -> felhasználó törlése(végleges kitiltás)
- Kijelentkezés

## 3. Jelenlegi üzleti folyamatok modellje

A jelenlegi üzleti folyamatok nincsenek, hiszen ez egy újonnan alakuló vállalkozás. A tervek szereint a cégünket megbízó vállalkozás online jegy és bérlet értékesítéssel szeretne foglalkozni, más termékek értékesítést nem tervezik.

## 4. Igényelt üzleti folyamatok modellje
Üzleti folyamatok: 

Online folyamatok felhasználó szintű egyének számára:
Amíg nem jelentkezik be a felhasználó szintü egyén addig csak az alábbi menürendszer érhetőek el:

- Főmenü
- Rendezvények listászása
- Regisztráció
- Be és kijelentkezés

- Bejelentkezés: bejelentkezés menü => felhasználó név és jelszó megadása => Bejelentkezési oldal megjelenése. => Jegyvásárlás menüre klikkelve elérhető az az összes esemény és ott a jegyvásárlás gombra kattintva lehet megvásárolni a jegyet/bérletet.
- Kijelentkezés: bejelentkezés menü => Kijelentkezés gombra kattintás

Online folyamatok, a cégünket megbízó vállalkozás alkalmazottainak:
Ők lesznek az alkalmazott szintü felhasználó.
Az alkalmazottak minden menüpontot és funkciót elérhetnek, amit a vendégek kiegészítve az új rendezvény/esemény felvitele illetve módosítása illetve új jegytípus hozzáadása és módosítása. 
Alkalmazott szintü felhasználó regisztrálására csakis az admin szitű jogosultság szükséges.

Új rendezvény felvitele
```mermaid
flowchart TD;
A("*Alkalmazott* jogosultsággal belépés");
B("Események nyilvántartása menü");
C("Új esemény menü");
D("Adatok megadása");
E("Véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
``

Rendezvény adatainak módosítása

```mermaid
flowchart TD;
A("*Alkalmazott* jogosultsággal belépés");
B("Rendezvény nyilvántartása menü");
C("Rendezvény listája menü");
D("Rendezvény neve melletti szerkesztés gombra kattintás");
E("Adatok megadása");
F("véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
E-->F;
```

Új jegy felvitele
```mermaid
flowchart TD;
A("*Alkalmazott* jogosultsággal belépés");
B("Jegy nyilvántartása menü");
C("Új jegy menü");
D("Adatok megadása");
E("Véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
``

Jegy adatainak módosítása

```mermaid
flowchart TD;
A("*Alkalmazott* jogosultsággal belépés");
B("Jegy nyilvántartása menü");
C("Jegy listája menü");
D("Jegy neve melletti szerkesztés gombra kattintás");
E("Adatok megadása");
F("véglegesítés");
A-->B;
B-->C;
C-->D;
D-->E;
E-->F;
```

