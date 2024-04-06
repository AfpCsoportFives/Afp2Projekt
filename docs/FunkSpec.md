# Funckionális specifickáció

## 1. A rendszer céljai és nem céljai
A fejlesztés célja egy rendezvény és jegykezelő alkalmazás készítése olyan felhasználók számára, akik bizonyos rendezvényekre és eseményekre meghívást kapnak. Az alkalmazás célja, hogy képes legyen rendezvények és események létrehozására, meghívók küldésére és jóváhagyására, QR kóddal jelenlét vezetésére, továbbá, a személyes adatok alapján különféle statisztikák létrehozására. Az alkalmazás különböző feladatkörrel rendelkező felhasználói csoportokat különböztet meg, melyek különböző jogosultságokkal rendelkeznek azzal kapcsolatban, hogy milyen műveleteket végezhetnek. Ezeknek a kezelésének a megvalósítása felhasználói fiókok adminisztrációján keresztül történik. Meg kell valósítani az egyes események és rendezvények létrehozását, amelynél meg kell adni az alapadatokat, mint: név, mely a rendezvény azonosítására szolgál; a leírást, mely egy rövid leírás a rendezvényről, beleértve a célközönséget, a témát, a helyszínt és az időpontot; kategóriát, mely a rendezvény típusa (pl. koncert, konferencia, sportesemény); a rendezvény kezdetének és végének dátumát és pontos időpontját; a rendezvény helyszínét valamint a maximális résztvevők számát. A meghívottak lesznek az alkalmazás fő felhasználói, a meghívók az alkalmazáson keresztül kerülnek majd kiküldésre, továbbá a jegykezelési funkciót is az alkalmazás látja majd el, QR kódok segítségével. Ahhoz, hogy az eseményekre csak a meghívottak jöjjenek el, az alkalmazás használatát külön regisztrációhoz kötjük, így az interneten keresztül nem lesz nyilvánosan elérhető honlap, amin keresztül bárki, regisztráció nélkül is láthatná a meghirdetett eseményeket. A fejlesztés első ütemében a fő funkciók (felhasználók nyilvántartása és kezelése, események és rendezvények létrehozása és adminisztrációja) megbízható működésének megvalósítása a célja, de nem cél a rendszer általánosabb felhasználásra történő felkészítése, pl. hogy bármilyen látogató számára elérhetőek legyenek az események.

## 2. Használati esetek
A rendszer használói a következők:

felhasználó (meghívott vendég)
adminisztrátor

A rendszernek a következő funkciókat kell ellátnia:

az adminisztrátorok tudjanak eseményeket és rendezvényeket létrehozni és törölni
az adminisztrátorok tudjanak meghívókat küldeni
az adminisztrátorok tudjanak statisztikát készíteni a QR kódos leolvasás alapján
az adminisztrátorok tudjanak meghívókat jóváhagyni
a felhasználók belépés után meg tudják nézni az események és rendezvények részleteit

Előfeltételek:

adminisztrátorok és felhasználók részére a rendszer használatához jogosultság, azaz jelszó szükséges
felhasználóknak az alkalmazás használatához regisztráció szükséges