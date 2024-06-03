| 1.0 verzió|

## Tesztelési jegyzőkönyvet írta:
| | |
| --- | --- |
| Név: | Andorfer Katalin|
| Utolsó módosítás: | 2024.06.03 |
| Böngésző: | Google Chrome |
| Operációs rendszer: | Windows 11 |

## Áttekintés

Unit teszt a metodusokat teszteli, azt vizsgáljuk, hogy a kapott érték megegyezik-e az elvárttal. 
A db classosztály unit tesztje a Database működését teszteli a jest keretremdszer segítségével.

## Teszt környezet bállítása

A jest.mock('mysql', ...) hívással a mysql modul funkcióit helyettesítik mock objektumokkal. 
Ez lehetővé teszi, hogy az adatbázis műveleteket szimuláljuk, anélkül, hogy valódi adatbázis kapcsolatot kellene létrehozni.
A mock objektumok a következők:

 * createConnection: Egy függvény, ami önmagát adja vissza (mockReturnThis), így láncolhatóak a további hívások
 * query: Egy mock függvény, amit később konkrét implementációkkal látnak el a tesztekben
 * end: Egy mock függvény, ami a kapcsolat lezárását szimulálja

## 1. Kostruktor teszt

|Lépés|Leírás|Teszt |
|-----|------|------|
|1.1  |A Database osztály példányosításakor ellenőrizzük, hogy a createConnection metódus pontosan egyszer hívódik-e meg |A teszt sikeresen ellőenőrzi|

## 2. 'query' metódus sikeres adatlekérdezés

|Lépés|Leírás|Teszt |
|-----|------|------|
|2.1  |A 'mysql.query' mock függvényébe adunk egy implementációt, ami sikeres adatlekérdezést szimulál. Ellenőrzik, hogy a visszaadott eredmény megegyezik-e a mockolt adatokkal. |A query metódus helyesen kezeli az adatlekérdezést és helyes eredményt ad vissza.|

## 3. 'query' metódus hibakezelése

|Lépés|Feladat|Teszt |
|-----|-------|------|
|3.1  | A 'query' metódusra adunk egy  implementációt, ami hiba esetén hívódik meg, és ellenőrzi, hogy a metódus megfelelően kezeli-e a hibát. |A teszt biztosítja, hogy a query metódus hibát dob, ha az adatbázis művelet során probléma adódik.|

## 4. 'close' metódus sikeres kapcsolatlezárás

|Lépés|Feladat|Teszt |
|-----|-------|------|
|4.1  | Ellenőrzik, hogy a close metódus hívja-e a mysql.end függvényt, és hogy az sikeresen lezárja-e a kapcsolatot.|A teszt bizonyítja, hogy a close metódus képes lezárni az adatbázis kapcsolatot.|


## 5. 'close' metódus hibakezelése

|Lépés|Feladat|Teszt |Megjegyzés|
|-----|-------|------|----------|
|5.1  | Hibát szimulálunk a kapcsolat lezárásakor, és ellenőrzi, hogy a metódus megfelelően kezeli-e a hibát.|A teszt biztosítja, hogy a close metódus hiba esetén megfelelően dobjon kivételt|
