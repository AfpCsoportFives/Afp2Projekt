# Funckionális specifickáció

## 1. A rendszer céljai és nem céljai
### 1.1 A rendszer céljai
A fejlesztés célja egy rendezvény és jegykezelő alkalmazás készítése olyan felhasználók számára, akik bizonyos rendezvényekre és eseményekre meghívást kapnak. Az alkalmazás célja, hogy képes legyen rendezvények és események létrehozására, meghívók küldésére és jóváhagyására, QR kóddal jelenlét vezetésére, továbbá, a személyes adatok alapján különféle statisztikák létrehozására. Az alkalmazás különböző feladatkörrel rendelkező felhasználói csoportokat különböztet meg, melyek különböző jogosultságokkal rendelkeznek azzal kapcsolatban, hogy milyen műveleteket végezhetnek. Ezeknek a kezelésének a megvalósítása felhasználói fiókok adminisztrációján keresztül történik. Meg kell valósítani az egyes események és rendezvények létrehozását, amelynél meg kell adni az alapadatokat, mint: név, mely a rendezvény azonosítására szolgál; a leírást, mely egy rövid leírás a rendezvényről, beleértve a célközönséget, a témát, a helyszínt és az időpontot; kategóriát, mely a rendezvény típusa (pl. koncert, konferencia, sportesemény); a rendezvény kezdetének és végének dátumát és pontos időpontját; a rendezvény helyszínét valamint a maximális résztvevők számát. A meghívottak lesznek az alkalmazás fő felhasználói, a meghívók az alkalmazáson keresztül kerülnek majd kiküldésre, továbbá a jegykezelési funkciót is az alkalmazás látja majd el, QR kódok segítségével. Ahhoz, hogy az eseményekre csak a meghívottak jöjjenek el, az alkalmazás használatát külön regisztrációhoz kötjük, így az interneten keresztül lesz egy nyilvánosan elérhető honlap, amin keresztül bárki, regisztrációval láthatja a meghirdetett eseményeket.
### 1.2 A rendszer nem céljai
A fejlesztés első ütemében a fő funkciók (felhasználók nyilvántartása és kezelése, események és rendezvények létrehozása és adminisztrációja) megbízható működésének megvalósítása a célja, de nem cél a rendszer általánosabb felhasználásra történő felkészítése, pl. hogy a látogatók részére regisztráció nélkül is elérhetőek legyenek az események.

## 2. Használati esetek
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

## 3. Megfeleltetés, hogyan fedik le a használati esetek a követelményeket
* K01, K02, K03: Az alkalmazást úgy hozzuk létre, hogy tartalmazza az események és rendezvények adminisztrációját, melyet az adminisztrátorok felhasználó név/jelszó megadásával a rendszerbe belépve fognak elérni. Ezek fogják adni az alkalmazás fő funkcióit.
* K04: Különböző jogosultsági szinteket fogunk kialakítani. Az adminisztrátori jogosultsággal rendelkezők minden funkcióhoz hozzá fognak férni, felhasználói (meghívott vendég) fiókokat tudnak létrehozni/törölni. Az adminisztrátorok jogosultságuk függvényében a felületre belépve listákat és kimutatásokat tudnak majd lekérni.
* K05: A felhasználói felületet úgy alakítjuk ki, hogy egy általános weboldal képét nyújtsa, továbbá, hogy az egyes funkciók egyértelmű elnevezésével könnyen elérhetőek és érthetőek lesznek.
* K06: A web alkalmazást úgy hozzuk létre, hogy az online felületen keresztül lehessen keresni a nyilvánosan elérhető események és rendezvények között az adatbázisban. A részvétel azonban kizárólag a rendszerbe való regisztráció után lehetséges.
* K07: A rendszer elkészítésekor ügyelünk a platformfüggetlen, robosztus működés kialakítására, ezért ellenőrizzük kódunk helyességét, hogy egy adott HTML elemet támogatják-e a böngészők, fontosabb alkalmazások és kisegítő technológiák. A HTML vizsgálatba beleértjük a CSS vizsgálatot is. A teszteléseket elvégezzük Firefox, Chrome, Explorer, Opera, Safari böngészőkön, ill. Windows, Linux, iOs operációs rendszereken is.
* K08: A szabványos és elterjedt technológiák használata biztosítja.
* K09: A kezelt adatokat MYSQL adatbázisban fogjuk tárolni. Az adatbázis használatával biztosítjuk az adatok bővíthetőségét. Az alkalmazást PHP objektum orientált módon valósítjuk meg, amellyel új funkciókat könnyedén tudunk utólag hozzáadni a rendszerhez.
