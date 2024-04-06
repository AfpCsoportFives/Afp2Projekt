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
```

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
```

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

































































































## 5 A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása rész kidolgozása

Általános adatvédelmi rendelet (Általános adatvédelmi rendelet). Adatkezelési tájékoztató.

Szerzői jogi törvény ( http://www.sztnh.gov.hu/hu/szakmai-oldalak/jogforrasok-0 )

Polgári törvénykönyv ( http://uvegkep.hu/ptk.pdf )

Európai uniós rendeletek, irányelvek, ajánlások AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2019/790 IRÁNYELVE (2019. április 17.) a digitális egységes piacon a szerzői és szomszédos jogokról, valamint a 96/9/EK és a 2001/29/ EK irányelv módosításáról

AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) a természetes személyeknek a személyes adatok kezelésével kapcsolatos védelméről és az ilyen adatok szabad áramlásáról,

A 2014/26/EU európai parlamenti és tanácsi irányelv a szerzői és szomszédos jogokra vonatkozó közös jogkezelésről és a zeneművek belső piacának online felhasználásának több területre kiterjedő hatályú engedélyezéséről szóló 2014. február 26-i A Bizottság 2012/417/EU (2012. július 17.) ajánlása a tudományos információkhoz való hozzáférésről és azok megőrzéséről

2012/417/EU (2012. július 17.) ajánlása a tudományos információkhoz való hozzáférésről és azok megőrzéséről;

AZ EURÓPAI PARLAMENT ÉS A TANÁCS 2016. április 27-i (EU) 2016/679 RENDELETE a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK irányelv hatályon kívül helyezéséről (általános adatvédelmi rendelet)

1992. évi LXIII. törvény a személyes adatok védelméről és a közérdekű adatok nyilvánosságáról

1999. évi LXXVI. törvény a szerzői jogról

2021. évi XXXVII. törvény a szerzői jogról szóló 1999. évi LXXVI. törvény és a szerzői jogok és a szerzői joghoz kapcsolódó jogok közös kezeléséről szóló 2016. évi XCIII. törvény jogharmonizációs célú módosításáról


A Bizottság 2011/711/EU ajánlása (2011. október 27.) a kulturális anyagok digitalizálásáról és online hozzáférhetőségéről, valamint a digitális megőrzésről

98/34/EK európai parlamenti és tanácsi irányelv a műszaki szabványok és szabályok, valamint az információs társadalom szolgáltatásaira vonatkozó szabályok információszolgáltatási eljárás megállapításáról (a 98/48/EK európai parlamenti és tanácsi irányelvvel módosított)

96/9/EK irányelv (1996. március 11.) az adatbázisok jogi védelméről

23/2011. (III. 8.) Korm. rendelet a zenés, táncos rendezvények működésének biztonságosabbá tételéről


## 6 Követelménylista 

ID	Verzió	Név                     	          Kifejtés
K01	V1.0	User adminisztrációja	              User regisztrálása, törlése az igényelt üzleti folyamatokban leírtak szerint.
K02	V1.0	Rendezvények adminisztrációja	      Rendezvények létrehozása, törlése az igényelt üzleti folyamatokban leírtak szerint.
K03	V1.0	Foglalás adminisztrációja	          Foglalás folyamatának kezelése a szükséges üzleti folyamatokban leírtak szerint.
K04	V1.0	Felhasználói fiókok kezelése	      Bejelentkezés, felhasználói adatok módosítása, meghívók rögzítése az 
                                                  adatbázisban, listák és kimutatások elkészítése a szükséges üzleti folyamatokban leírtak szerint.
K05	V1.0	Egyszerűen használható 
            kezelőfelület                         A legelterjedtebb internet böngészőkből használható felület megvalósítása az  
                                                  admin számára
K06	V1.0	Online elérhető nyilvános
            rendezvnyek listája 	              Bárki számára elérhető online felület készítése, amin keresztül elérhető, böngészhető 
                                                  és kereshető a könyvtárkatalógus tartalma.
K07	V1.0	Platformfüggetlen, robusztus működés  Szabványos, az iparágban folyamatosan bevált operációs rendszertől független 
                                                  technológiák használata: Php, React, Node js, MySQL.
K08	V1.0	Költséghatékony üzemeltetés           A szabványos és elterjedt technológiák használatát biztosítja.

K09 V1.0	Bővíthetőség                          A kezelt adatok mennyiségének, valamint a felhasználók számának bővíthetősége és 
                                                  utólag újabb funkciók hozzáadásának lehetőségének biztosítása.


## 7 Fogalomtár

User:  rendezvényen résztvevő, aki előzetesn reisztrál, a regisztráció során megadja a különböző statisztikák leszűréséhez szükséges 
       adatokat

Admin: kezeli a User adatokat, javítja az estleges hibás regisztrációkat, kezeli a rendezvényekkel kapcsolatos válzozásokat, elvégzi az 
       új rendezvények létrehozását, leszűri a kívánt statisztikákat

Rendezvény: meghírdetett esemény, amelyen előzetes regisztrációval lehet részt venni

Statisztika: a regisztrált résztvevők által megadott adatokból, különböző lekérdezések által létrehozott kimutatások

