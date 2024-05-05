-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 05. 12:59
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

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `esemenyek`
--

CREATE TABLE `esemenyek` (
  `RendezvenyId` bigint(20) NOT NULL,
  `RendezvenyNeve` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendeznenyIdőpontja` datetime NOT NULL DEFAULT current_timestamp(),
  `EloadoNeveTitulusa` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyTemaja` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyTipusa` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RendezvenyHelyszine` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
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
  `felhasznalokId` bigint(20) NOT NULL,
  `Vezeteknev` text NOT NULL,
  `Keresztnev` text NOT NULL,
  `FelhasznaloNev` varchar(50) NOT NULL,
  `Jelszo` varchar(50) NOT NULL,
  `Email` text NOT NULL,
  `SzuletesiDatum` date NOT NULL,
  `Neme` text NOT NULL,
  `Iranyitoszam` text NOT NULL,
  `Varos` text NOT NULL,
  `UtcaHazszam` text NOT NULL,
  `Foglalkozasa` text NOT NULL,
  `IskolaiVegzettsege` text NOT NULL,
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
  `FoglalasokId` bigint(20) UNSIGNED NOT NULL,
  `FelhasznalokId` bigint(20) NOT NULL,
  `RendezvenyId` bigint(20) NOT NULL,
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
  ADD UNIQUE KEY `Email` (`Email`) USING HASH;

--
-- A tábla indexei `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD PRIMARY KEY (`FoglalasokId`),
  ADD KEY `FK_RendezvenyId` (`RendezvenyId`),
  ADD KEY `FK_FelhasznalokId` (`FelhasznalokId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `esemenyek`
--
ALTER TABLE `esemenyek`
  MODIFY `RendezvenyId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `felhasznalokId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  MODIFY `FoglalasokId` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

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
