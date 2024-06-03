| 1.0 verzió|

## Tesztelési jegyzőkönyvet írta:
| | |
| --- | --- |
| Név: | Spengler András |
| Utolsó módosítás: | 2024.06.03. |
| Böngésző: | Google Chrome |
| Operációs rendszer: | Windows 11 |

## Tesztesetek

### TC1: getAllUser metódus sikeres lekérdezése

| **Teszt leírása**     | Ellenőrzi, hogy az `getAllUser` metódus visszaadja-e az összes felhasználót az adatbázisból. |
|-----------------------|------------------------------------------------------------------------------------------------|
| **Tesztelő**          | Spengler András |
| **Teszt dátuma**      | 2024.06.03. |
| **Teszt eredménye**   | Sikeres |

**Előfeltételek:**

- A `db.query` metódus mockolva van a megfelelő visszatérési értékekkel.

**Teszt lépések:**

|Lépés|Feladat|Teszt |
|-----|-------|------|
|1.1  | Hívjuk meg az `User.getAllUser` metódust. |success|
|1.2  | Ellenőrizzük, hogy a mockolt `db.query` metódust a helyes paraméterekkel hívták-e meg. |success|

**Várt eredmény:**

- A metódus sikeresen visszaadja az összes felhasználó adatait.

**Tényleges eredmény:**

- A metódus sikeresen visszaadta az összes felhasználó adatait.

---

### TC2: getAllUserById metódus sikeres lekérdezése

| **Teszt leírása**     | Ellenőrzi, hogy az `getAllUserById` metódus visszaadja-e a megadott ID-jű felhasználót.          |
|-----------------------|------------------------------------------------------------------------------------------------|
| **Tesztelő**          | Spengler András |
| **Teszt dátuma**      | 2024.06.03 |
| **Teszt eredménye**   | Sikeres |

**Előfeltételek:**

- A `db.query` metódus mockolva van, hogy visszaadja a megadott ID-jű felhasználó adatait.

**Teszt lépések:**

|Lépés|Feladat|Teszt |
|-----|-------|------|
|2.1  | Hívjuk meg az `User.getAllUserById` metódust egy specifikus ID-vel. |success|
|2.2  | Ellenőrizzük, hogy a mockolt `db.query` metódust a helyes paraméterekkel hívták-e meg. |success|

**Várt eredmény:**

- A metódus sikeresen visszaadja a megadott ID-jű felhasználó adatait.

**Tényleges eredmény:**

- A metódus sikeresen visszaadta a megadott ID-jű felhasználó adatait.

---

### TC3: updateUser metódus sikeres frissítése

| **Teszt leírása**     | Ellenőrzi, hogy az `updateUser` metódus sikeresen frissíti-e a felhasználó adatait az adatbázisban. |
|-----------------------|----------------------------------------------------------------------------------------------------|
| **Tesztelő**          | Spengler András |
| **Teszt dátuma**      | 2024.06.03. |
| **Teszt eredménye**   | Sikeres |


**Előfeltételek:**

- A `db.query` metódus mockolva van, hogy jelezze a sikeres frissítést.

**Teszt lépések:**

|Lépés|Feladat|Teszt |
|-----|-------|------|
|3.1  | Hívjuk meg az `User.updateUser` metódust a megadott felhasználói adatokkal. |success|
|3.2  | Ellenőrizzük, hogy a mockolt `db.query` metódust a helyes paraméterekkel és SQL-lekérdezéssel hívták-e meg. |success|

**Várt eredmény:**

- A frissítés sikeres, és a metódus visszaadja, hogy a művelet sikeres volt.

**Tényleges eredmény:**

- A frissítés sikeresen megtörtént, a metódus visszaadta a sikeres műveletet.

---

### TC4: deleteUser metódus sikeres törlése

| **Teszt leírása**     | Ellenőrzi, hogy az `deleteUser` metódus sikeresen törli-e a megadott ID-jű felhasználót az adatbázisból. |
|-----------------------|-------------------------------------------------------------------------------------------------------|
| **Tesztelő**          | Spengler András |
| **Teszt dátuma**      | 2024.06.03 |
| **Teszt eredménye**   | Sikeres |


**Előfeltételek:**

- A `db.query` metódus mockolva van, hogy jelezze a sikeres törlést.

**Teszt lépések:**

|Lépés|Feladat|Teszt |
|-----|-------|------|
|4.1  | Hívjuk meg az `User.deleteUser` metódust a megadott ID-val. |success|
|2.2  | Ellenőrizzük, hogy a mockolt `db.query` metódust a helyes paraméterekkel hívták-e meg. |success|

**Várt eredmény:**

- A törlés sikeres, és a metódus visszaadja, hogy a művelet sikeres volt.

**Tényleges eredmény:**

- A törlés sikeresen megtörtént, a metódus visszaadta a sikeres műveletet.

---