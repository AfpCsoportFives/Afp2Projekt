-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 30. 22:41
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `rendezvenyszervezo`
--
CREATE DATABASE IF NOT EXISTS `rendezvenyszervezo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `rendezvenyszervezo`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `esemenyek`
--

CREATE TABLE `esemenyek` (
  `RendezvenyId` int(10) NOT NULL,
  `RendezvenyNeve` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyIdőpontja` datetime NOT NULL DEFAULT current_timestamp(),
  `EloadoNeveTitulusa` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyTemaja` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyTipusa` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `RendezvenyHelyszine` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `RendezvenyLeirasa` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `LetrehozasDatuma` datetime NOT NULL DEFAULT current_timestamp(),
  `UtolsoModosítasDatuma` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `SzabadHelyekSzama` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `esemenyek`
--

INSERT INTO `esemenyek` (`RendezvenyId`, `RendezvenyNeve`, `RendezvenyIdőpontja`, `EloadoNeveTitulusa`, `RendezvenyTemaja`, `RendezvenyTipusa`, `RendezvenyHelyszine`, `RendezvenyLeirasa`, `LetrehozasDatuma`, `UtolsoModosítasDatuma`, `SzabadHelyekSzama`) VALUES
(6, 'Stresszkezelési technikák', '2024-05-30 20:54:17', 'Dezső István', 'Stressz felismerése, kezelése, szorogás megszüntetése', 'Online', '51', 'A minket ért stressz felismerése a mindennapoknban. A sztessz kezelésének hatékony és egyszerű technikái. Természetes gyógymódok a szorongás feloldására.', '2024-05-30 20:54:17', '2024-05-30 20:54:17', 3),
(17, 'Superhősők civilben', '2024-05-30 20:13:54', 'Sir Stan Lee', 'Szuperhősők a világegyetem megmentése előtt és után', 'Online', NULL, 'A mindenki által jól ismert szuperhősők mintVa sember, Amerika Kapitánya, Pókember, Thor, Doktor Strange, Thanos engednek betekintést adni mindennapi életükbe, abba hogy mit is csinálnak akkor amikor nem a világegyetem megmentésével foglalkoznak.  ', '2024-05-30 20:13:54', '2024-05-30 20:13:54', 30),
(18, 'Kelet Varázsa', '2024-05-30 20:13:54', 'Asirah ', 'Hastánc alaptól-felsőfokig', 'Online', NULL, 'A hastánc arab eredetű, hangsúlyozza az emberi test összetett mozgását, melynek középpontjában a csípő és köldöktáj hullámoztatása és rezegtetése áll, de a mozdulatok a test minden részét felhasználják. ', '2024-05-30 20:13:54', '2024-05-30 20:13:54', 15),
(21, 'Állatok és emberek', '2024-05-30 20:37:46', 'Dr. Csányi Vilmos', 'Az állatok viselkedésének tudománya', 'Online', NULL, 'Hogyan élnek az állatok, milyen módon történik a viselkedés szabályozása, öröklődnek-e a magatartással kapcsolatos tulajdonságok, milyen az állatközösségek szerkezete, hogyan kommunikálnak és gondolkodnak-e az állatok.', '2024-05-30 20:37:46', '2024-05-30 20:37:46', 12),
(22, 'Egészséges táplálkozás alapja', '2024-05-30 20:46:22', 'Dr Kiss Lujza', 'Egészséges táplálkozás kivitelezése egyszerűen, könnyedén', 'Online', NULL, 'Az előadás célja, hogy elosztlassa az egészséges táplálkozást körüllendő misztériumot. Lefektetjük az egészséges táplálkozás alapjai gyakorlati példákon keresztül.', '2024-05-30 20:46:22', '2024-05-30 20:46:22', 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `felhasznalokId` int(10) NOT NULL,
  `Vezeteknev` varchar(50) NOT NULL,
  `Keresztnev` varchar(50) NOT NULL,
  `FelhasznaloNev` varchar(50) NOT NULL,
  `Jelszo` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `SzuletesiDatum` date NOT NULL,
  `Neme` varchar(10) NOT NULL,
  `Iranyitoszam` varchar(10) NOT NULL,
  `Varos` varchar(50) NOT NULL,
  `UtcaHazszam` varchar(100) NOT NULL,
  `Foglalkozasa` varchar(100) NOT NULL,
  `IskolaiVegzettsege` varchar(100) NOT NULL,
  `RegisztracioDatuma` datetime NOT NULL,
  `FelhasznaloStatusza` tinyint(1) NOT NULL,
  `Cookie` text DEFAULT NULL,
  `CookieExpire` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`felhasznalokId`, `Vezeteknev`, `Keresztnev`, `FelhasznaloNev`, `Jelszo`, `Email`, `SzuletesiDatum`, `Neme`, `Iranyitoszam`, `Varos`, `UtcaHazszam`, `Foglalkozasa`, `IskolaiVegzettsege`, `RegisztracioDatuma`, `FelhasznaloStatusza`, `Cookie`, `CookieExpire`) VALUES
(1, 'Szabó', 'István', 'SzabI', 'szabist', 'szabo.istvan@gmail.com', '1980-05-24', 'férfi', '1141', 'Budapest', 'Kossuth L. u. 23.', 'cipész', 'szakmunkás ', '2024-05-30 20:54:27', 1, NULL, NULL),
(2, 'Kiss', 'Jolán', 'KissJ', 'kissjo', 'jolan.kiss@gmail.com', '1975-10-17', 'nő', '3500', 'Miskolc', 'Ady E. u. 5.', 'Tanár', 'Főiskola', '2024-05-30 21:03:56', 1, NULL, NULL),
(3, 'Nagy', 'Péter', 'NagyP', 'nagypet', 'n.peter@gmail.com', '1965-01-31', 'férfi', '4000', 'Debrecen', 'Rákóczi F. u. 42', 'asztalos', 'szakmunkás', '2024-05-30 21:06:48', 1, NULL, NULL),
(4, 'Varga', 'Mária', 'VarM', 'varma', 'varga.maria54@gmail.com', '1954-04-01', 'nő', '1032', 'Budapest', 'Petőfi S. u. 10.', 'banki ügyintéző', 'érettségi', '2024-05-30 21:10:01', 1, NULL, NULL),
(5, 'Tóth', 'Éva', 'TothE', 'tothev', 'eva.toth1985@gmail.com', '1985-02-28', 'nő', '6700', 'Szeged', 'Arany J. u. 20.', 'Pénzügyi vezető', 'Főiskola', '2024-05-30 21:27:38', 1, NULL, NULL),
(6, 'Kovács', 'János', 'KovJ', 'kovjan', 'kovacsjanos@gmail.com', '2000-06-17', 'férfi', '1412', 'Budapest', 'Thököly u. 17.', 'vállalkozó', 'érettségi', '2024-05-30 21:33:55', 1, NULL, NULL),
(7, 'Petőfi', 'Sándor', 'PetS', 'petsan', 'petőfisandor1848@gmailcom', '1823-01-01', 'férfi', '6200', 'Kiskőrös', 'Fő u. 48.', 'költő', 'érettségi', '2024-05-30 21:37:24', 1, NULL, NULL),
(8, 'Arany ', 'János', 'AranyJ', 'arajan', 'janos.arany1817@gmail.com', '1817-03-02', 'férfi', '1182', 'Budapest', 'Virág u. 2.', 'író', 'érettségi', '2024-05-30 21:42:56', 1, NULL, NULL),
(9, 'Sas', 'Béla', 'SaB', 'Sasbe', 'belasas2010@gmail.com', '0000-00-00', 'férfi', '3200', 'Gyöngyös', 'Őzike u. 51.', 'természetgyógyász', 'Főiskola', '2024-05-30 21:52:22', 1, NULL, NULL),
(10, 'Kovács', 'Jánosné', 'KovJne', 'kovjanne', 'kovacsjanosne@gmail.com', '2001-03-27', 'nő', '1412', 'Budapest', 'Thököly u. 17.', 'óvónő', 'Főiskola', '2024-05-30 21:33:55', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jelentkezesek`
--

CREATE TABLE `jelentkezesek` (
  `FoglalasokId` int(10) UNSIGNED NOT NULL,
  `felhasznalokId` int(10) NOT NULL,
  `RendezvenyId` int(10) NOT NULL,
  `FoglalasDatuma` datetime NOT NULL,
  `FoglalasokSzama` int(100) NOT NULL,
  `UtolsoModositasDatuma` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `jelentkezesek`
--

INSERT INTO `jelentkezesek` (`FoglalasokId`, `felhasznalokId`, `RendezvenyId`, `FoglalasDatuma`, `FoglalasokSzama`, `UtolsoModositasDatuma`) VALUES
(100, 6, 6, '2024-05-30 22:20:58', 3, '2024-05-30 22:23:19'),
(101, 9, 18, '2024-05-30 22:20:58', 2, '2024-05-30 22:23:19'),
(102, 4, 22, '2024-05-30 22:23:45', 1, '2024-05-30 22:24:47'),
(103, 1, 21, '2024-05-30 22:23:45', 4, '2024-05-30 22:24:47'),
(104, 7, 17, '2024-05-30 22:24:53', 5, '2024-05-30 22:25:16');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `esemenyek`
--
ALTER TABLE `esemenyek`
  ADD PRIMARY KEY (`RendezvenyId`),
  ADD UNIQUE KEY `RendezvenyNeve_Egyedi` (`RendezvenyNeve`,`RendezvenyIdőpontja`) USING HASH,
  ADD KEY `RendezvenyNeve` (`RendezvenyNeve`(768)),
  ADD KEY `RendeznenyIdőpontja` (`RendezvenyIdőpontja`);

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`felhasznalokId`),
  ADD UNIQUE KEY `FelhasznaloNev_Egyedi` (`FelhasznaloNev`) USING BTREE,
  ADD UNIQUE KEY `Email` (`Email`);

--
-- A tábla indexei `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD PRIMARY KEY (`FoglalasokId`),
  ADD KEY `FK_FelhasznalokId` (`felhasznalokId`),
  ADD KEY `FK_RendezvenyId` (`RendezvenyId`);


--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `esemenyek`
--
ALTER TABLE `esemenyek`
  MODIFY `RendezvenyId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `felhasznalokId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  MODIFY `FoglalasokId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD CONSTRAINT `FK_FelhasznalokId` FOREIGN KEY (`FelhasznalokId`) REFERENCES `felhasznalok` (`felhasznalokId`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_RendezvenyId` FOREIGN KEY (`RendezvenyId`) REFERENCES `esemenyek` (`RendezvenyId`) ON DELETE CASCADE;


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

