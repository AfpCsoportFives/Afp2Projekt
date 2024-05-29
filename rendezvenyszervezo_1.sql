-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 07. 14:03
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
  `RendeznenyIdőpontja` datetime NOT NULL DEFAULT current_timestamp(),
  `EloadoNeveTitulusa` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyTemaja` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyTipusa` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyHelyszine` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyLeirasa` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `LetrehozasDatuma` datetime NOT NULL DEFAULT current_timestamp(),
  `UtolsoModosítasDatuma` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `SzabadHelyekSzama` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
  `Cookie` text NOT NULL,
  `CookieExpire` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jelentkezesek`
--

CREATE TABLE `jelentkezesek` (
  `FoglalasokId` int(10) UNSIGNED NOT NULL,
  `FelhasznalokId` int(10) NOT NULL,
  `RendezvenyId` int(10) NOT NULL,
  `FoglalasDatuma` datetime NOT NULL,
  `FoglalasokSzama` int(100) NOT NULL,
  `UtolsoModositasDatuma` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `esemenyek`
--
ALTER TABLE `esemenyek`
  ADD PRIMARY KEY (`RendezvenyId`),
  ADD UNIQUE KEY `RendezvenyNeve_Egyedi` (`RendezvenyNeve`,`RendeznenyIdőpontja`) USING HASH,
  ADD KEY `RendezvenyNeve` (`RendezvenyNeve`(768)),
  ADD KEY `RendeznenyIdőpontja` (`RendeznenyIdőpontja`);

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
  ADD KEY `FK_FelhasznalokId` (`FelhasznalokId`),
  ADD KEY `FK_RendezvenyId` (`RendezvenyId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `esemenyek`
--
ALTER TABLE `esemenyek`
  MODIFY `RendezvenyId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `felhasznalokId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  MODIFY `FoglalasokId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD CONSTRAINT `FK_FelhasznalokId` FOREIGN KEY (`FelhasznalokId`) REFERENCES `felhasznalok` (`felhasznalokId`),
  ADD CONSTRAINT `FK_RendezvenyId` FOREIGN KEY (`RendezvenyId`) REFERENCES `esemenyek` (`RendezvenyId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
