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


## 5. Követelménylista

| Id | Modul | Név | Leírás |
| :---: | --- | --- | --- |
| K1 | ...| ... | ... |

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

## 9. Forgatókönyvek

## 10. Funkció - követelmény megfeleltetése

| Id | Követelmény | Funkció |
| :---: | --- | --- |
| K4 | ... | ... |

## 11 Fogalomszótár
