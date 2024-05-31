| 1.0 verzió|

## Tesztelési jegyzőkönyvet írta:
| | |
| --- | --- |
| Név: | Bakos Zsolt|
| Utolsó módosítás: | 2024.05.31. |
| Böngésző: | Google Chrome |
| Operációs rendszer: | Windows 11 |

## Áttekintés
Ez a teszt szett az Events oldal működését ellenőrzi. Az oldal lehetőséget biztosít a felhasználóknak arra, hogy különböző eseményeket tekintsenek meg, új eseményeket adjanak hozzá, meglévő eseményeket szerkesszenek és töröljenek. A tesztek biztosítják, hogy az oldal összes funkciója megfelelően működjön.


## 1. Oldal címének ellenőrzése

|Lépés|Feladat|Teszt |
|-----|-------|------|
|1.1  | Megnyílik az Events oldal? |success|
|1.2  | Az oldal címe (Rendezvények) megjelenik? |success|

## 2. Esemény részleteinek megjelenítése

|Lépés|Feladat|Teszt |
|-----|-------|------|
|2.1  | Megnyílik az Events oldal? |success|
|2.2  | Az események listázására szolgáló API hívás lefut? |success|
|2.3  | Pontosan egy esemény kártya jelenik meg? |success|
|2.4  | Az összes esemény részlet (név, időpont, előadó neve és titulusa, téma, típus, helyszín, szabad helyek száma) helyesen jelenik meg? |success|

## 3. Új esemény hozzáadására szolgáló oldalra navigálás

|Lépés|Feladat|Teszt |
|-----|-------|------|
|3.1  | Megnyílik az Events oldal? |success|
|3.2  | "Új rendezvény hozzáadása" link kattintható? |success|
|3.3  | Az URL-ben elérhető az /events/create útvonal? |success|

## 4. Esemény részleteinek oldalra navigálás

|Lépés|Feladat|Teszt |
|-----|-------|------|
|4.1  | Events oldal elérhető? |success|
|2.2  | Az események listázására szolgáló API hívás lefut? |success|
|4.3  | A "Részletek" link helyes az esemény kártyán belül? |success|
|4.4  | Az URL tartalmazza az /events/details/1 útvonalat? |success|

## 5. Esemény szerkesztésére szolgáló oldalra navigálás

|Lépés|Feladat|Teszt |Megjegyzés|
|-----|-------|------|----------|
|5.1  | Events oldal megjelenik? |success|
|2.2  | Az események listázására szolgáló API hívás lefut? |success|
|5.3  | A "Módosít" link helyes az esemény kártyán belül? |success|
|5.4  | Az egyedi esemény részleteinek API hívása lefut? |success|
|5.5  | Az URL tartalmazza az /events/edit/1 útvonalat? |success|

## 6. Esemény törlése

|Lépés|Feladat|Teszt |Megjegyzés|
|-----|-------|------|----------|
|5.1  | Az esemény törlésére szolgáló API hívás mockolása megtörténik? |success|
|2.2  | Events oldal elérhető? |success|
|5.3  | Az események listázására szolgáló API hívás lefut? |success|
|5.4  | A "Töröl" link helyes az esemény kártyán belül? |success|
|5.5  | Az események törlésére szolgáló API hívás lefut?  |success|
|5.6  | Nincs több esemény a kártyán? |success|