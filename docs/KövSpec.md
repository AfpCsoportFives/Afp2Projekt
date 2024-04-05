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

AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2017/1563 RENDELETE (2017. szeptember 13.) a szerzői és a szomszédos jogi védelemben részesülő egyes művek és más teljesítmények elérhető formátumú példányainak a vakok, látáskárosultak és nyomtatott szöveget egyéb szolgáló eszközöket használnak, határokon átnyúló, az Unió és harmadik országok közötti cseréjéről

2017/1564/EU európai parlamenti és tanácsi irányelv (2017. szeptember 13.) a szerzői és a szomszédos jogi védelemben részesülő egyes műveknek és más teljesítményeknek a vakok, látáskárosultak és nyomtatott szöveget egyéb okból felhasználható személyek érdekeit szolgáló egyes felhasználási módiról, valamint az egyes felhasználási módokról információs társadalomban a szerzői és szomszédos jogok egyes vonatkozásainak összehangolásáról szóló 2001/29/EK irányelv módosításáról szóló,

AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) a természetes személyeknek a személyes adatok kezelésével kapcsolatos védelméről és az ilyen adatok szabad áramlásáról,

A 2014/26/EU európai parlamenti és tanácsi irányelv a szerzői és szomszédos jogokra vonatkozó közös jogkezelésről és a zeneművek belső piacának online felhasználásának több területre kiterjedő hatályú engedélyezéséről szóló 2014. február 26-i A Bizottság 2012/417/EU (2012. július 17.) ajánlása a tudományos információkhoz való hozzáférésről és azok megőrzéséről

2012/417/EU (2012. július 17.) ajánlása a tudományos információkhoz való hozzáférésről és azok megőrzéséről;

2012/28/EU irányelv az árva művek egyes felhasználási módjairól

2006/115/EK irányelv a bérleti jogról és a haszonkölcsönzési jogról, valamint a szellemi tulajdon területén a szerzői joggal szomszédos bizonyos jogokról

A Bizottság 2011/711/EU ajánlása (2011. október 27.) a kulturális anyagok digitalizálásáról és online hozzáférhetőségéről, valamint a digitális megőrzésről

98/34/EK európai parlamenti és tanácsi irányelv a műszaki szabványok és szabályok, valamint az információs társadalom szolgáltatásaira vonatkozó szabályok információszolgáltatási eljárás megállapításáról (a 98/48/EK európai parlamenti és tanácsi irányelvvel módosított)

96/9/EK irányelv (1996. március 11.) az adatbázisok jogi védelméről

Miniszteri rendeletek

51/2014. (XII. 10.) EMMI rendelet a múzeum, valamint az országos szakkönyvtár és a megyei könyvtár éves munkatervéhez szükséges szakmai mutatókról

30/2014. (IV. 10.) EMMI rendelet az országos múzeumról, az országos szakmúzeum, a nemzeti könyvtár, az országos szakkönyvtár és az állami egyetemi könyvtár kiemelt feladatairól

39/2013. (V. 31.) EMMI rendelet a Könyvtárellátási Szolgáltató Rendszer működéséről

14/2011. (IV. 7.) NEFMI rendelet a nyilvános haszonkölcsönzésért a szerző megillető díj megállapításához és felosztásához szükséges adatokról, valamint az adatszolgáltatásra kötelezett nyilvános könyvtárakról

22/2005. (VII. 18.) NKÖM rendelet a muzeális könyvtári dokumentumok kezelésével és nyilvántartásával kapcsolatos szabályokról

7/1985. (IV. 26.) MM rendelet a könyvtári anyagok bejelentéséről

3/1975. (VIII. 17.) KM-PM együttes rendelet a könyvtári állomány ellenőrzéséről (leltározásáról) és az állományból való törlésről szóló szabályzat kiadásáról

Könyvtári vonatkozású Kormányhatározatok 1341/2019. (VI. 11.) Korm. rendelet 1. (1) bekezdése alapján. határozat a Digitális Kompetencia Keretrendszer fejlesztéséről és bevezetésének lépéseiről

1175/2018. (III. 28.) Korm. rendelet 1. (1) bekezdése alapján. határozat a Közgyűjteményi Digitalizálási Stratégia megvalósítása érdekében 2018-2021. évek között szükséges intézkedésekről

1404/2017. (VI. 28.) Korm. rendelet 4. (1) bekezdése szerint. határozat a Digitális Nemzet Fejlesztési Program megvalósítása során elkészült Közgyűjteményi Digitalizálási Stratégiáról

Törvények

1997. évi CXL. törvény a muzeális intézményekről, a nyilvános könyvtári ellátásról és a közművelődésről

1992. XXXIII. törvény a közalkalmazottak jogállásáról

2012. évi CLII. törvény a muzeális intézményekről, a nyilvános könyvtári ellátásról és a közművelődésről szóló 1997. évi CXL. törvény módosításáról

2015. évi CXLIII. törvény a közbeszerzésekről

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
                                                  technológiák használata: Php, Apache HTTP , MySQL.
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





