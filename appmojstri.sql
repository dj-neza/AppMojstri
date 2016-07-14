-- MySQL dump 10.13  Distrib 5.6.30, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: appmojstri
-- ------------------------------------------------------
-- Server version	5.6.30-0ubuntu0.15.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Odziv`
--

DROP TABLE IF EXISTS `Odziv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Odziv` (
  `idOdziv` int(11) NOT NULL AUTO_INCREMENT,
  `prijavaPotrjena` tinyint(1) DEFAULT NULL,
  `komentar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idOdziv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Odziv`
--

LOCK TABLES `Odziv` WRITE;
/*!40000 ALTER TABLE `Odziv` DISABLE KEYS */;
/*!40000 ALTER TABLE `Odziv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pacient`
--

DROP TABLE IF EXISTS `Pacient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pacient` (
  `idPacient` int(11) NOT NULL AUTO_INCREMENT,
  `zdravstvenaKartica` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `ime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `priimek` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idPacient`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pacient`
--

LOCK TABLES `Pacient` WRITE;
/*!40000 ALTER TABLE `Pacient` DISABLE KEYS */;
INSERT INTO `Pacient` VALUES (1,'123456','Janez','Novak','12345565756','dsfsjfis@mdkg.com'),(2,'3253464574','Abra','Kadabra','4365464564','dfijid@sgdfg.si');
/*!40000 ALTER TABLE `Pacient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Prijava`
--

DROP TABLE IF EXISTS `Prijava`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Prijava` (
  `idPrijava` int(11) NOT NULL AUTO_INCREMENT,
  `idPacient` int(11) DEFAULT NULL,
  `idOdziv` int(11) DEFAULT NULL,
  `idTermin` int(11) DEFAULT NULL,
  `razlog` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idPrijava`),
  KEY `fk_Prijava_Odziv_idx` (`idOdziv`),
  KEY `fk_Prijava_Pacient_idx` (`idPacient`),
  KEY `fk_Prijava_Termin_idx` (`idTermin`),
  CONSTRAINT `fk_Prijava_Odziv` FOREIGN KEY (`idOdziv`) REFERENCES `Odziv` (`idOdziv`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prijava_Pacient` FOREIGN KEY (`idPacient`) REFERENCES `Pacient` (`idPacient`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prijava_Termin` FOREIGN KEY (`idTermin`) REFERENCES `Termin` (`idTermin`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prijava`
--

LOCK TABLES `Prijava` WRITE;
/*!40000 ALTER TABLE `Prijava` DISABLE KEYS */;
INSERT INTO `Prijava` VALUES (1,1,NULL,2,'Boli me želodec'),(2,2,NULL,8,'Boli me noga');
/*!40000 ALTER TABLE `Prijava` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Termin`
--

DROP TABLE IF EXISTS `Termin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Termin` (
  `idTermin` int(11) NOT NULL AUTO_INCREMENT,
  `idZdravnik` int(11) DEFAULT NULL,
  `idPacient` int(11) DEFAULT NULL,
  `zacetek` time DEFAULT NULL,
  `datum` date DEFAULT NULL,
  PRIMARY KEY (`idTermin`),
  KEY `fk_Termin_Zdravnik_idx` (`idZdravnik`),
  KEY `fk_idPacient` (`idPacient`),
  CONSTRAINT `fk_Termin_Zdravnik` FOREIGN KEY (`idZdravnik`) REFERENCES `Zdravnik` (`idZdravnik`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idPacient` FOREIGN KEY (`idPacient`) REFERENCES `Pacient` (`idPacient`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Termin`
--

LOCK TABLES `Termin` WRITE;
/*!40000 ALTER TABLE `Termin` DISABLE KEYS */;
INSERT INTO `Termin` VALUES (1,1,NULL,'08:00:00','2016-07-16'),(2,1,NULL,'10:00:00','2016-07-16'),(3,1,NULL,'11:00:00','2016-07-16'),(4,1,NULL,'14:00:00','2016-07-16'),(5,1,NULL,'15:00:00','2016-07-16'),(6,1,NULL,'16:00:00','2016-07-16'),(7,1,NULL,'10:00:00','2016-07-23'),(8,1,NULL,'15:00:00','2016-07-24'),(9,1,NULL,'11:00:00','2016-08-20'),(10,1,NULL,'18:00:00','2016-08-20'),(11,2,NULL,'08:30:00','2016-07-16'),(12,2,NULL,'07:15:00','2016-07-17'),(13,2,NULL,'09:00:00','2016-07-16'),(14,2,NULL,'16:00:00','2016-07-17'),(15,2,NULL,'18:00:00','2016-07-16'),(16,2,NULL,'18:30:00','2016-07-17'),(17,2,NULL,'08:00:00','2016-07-28'),(18,2,NULL,'16:20:00','2016-07-31'),(19,2,NULL,'11:30:00','2016-08-20'),(20,2,NULL,'15:15:00','2016-08-24'),(21,3,NULL,'08:15:00','2016-07-18'),(22,3,NULL,'08:45:00','2016-07-18'),(23,3,NULL,'10:20:00','2016-07-18'),(24,3,NULL,'13:30:00','2016-07-18'),(25,3,NULL,'14:00:00','2016-07-18'),(26,3,NULL,'15:00:00','2016-07-18'),(27,3,NULL,'09:30:00','2016-07-22'),(28,3,NULL,'14:20:00','2016-07-25'),(29,3,NULL,'10:30:00','2016-08-16'),(30,3,NULL,'15:15:00','2016-08-29'),(31,4,NULL,'08:00:00','2016-07-16'),(32,4,NULL,'09:15:00','2016-07-16'),(33,4,NULL,'10:00:00','2016-07-17'),(34,4,NULL,'11:30:00','2016-07-17'),(35,4,NULL,'13:00:00','2016-07-16'),(36,4,NULL,'13:20:00','2016-07-16'),(37,4,NULL,'09:30:00','2016-07-22'),(38,4,NULL,'12:50:00','2016-07-25'),(39,4,NULL,'10:10:00','2016-08-17'),(40,4,NULL,'16:20:00','2016-08-24');
/*!40000 ALTER TABLE `Termin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ustanova`
--

DROP TABLE IF EXISTS `Ustanova`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ustanova` (
  `idUstanova` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `naslov` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idUstanova`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ustanova`
--

LOCK TABLES `Ustanova` WRITE;
/*!40000 ALTER TABLE `Ustanova` DISABLE KEYS */;
INSERT INTO `Ustanova` VALUES (1,'ZD Ljubljana - enota Bežigrad',NULL),(2,'ZD Ljubljana - enota Moste-Polje',NULL);
/*!40000 ALTER TABLE `Ustanova` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zdravnik`
--

DROP TABLE IF EXISTS `Zdravnik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Zdravnik` (
  `idZdravnik` int(11) NOT NULL AUTO_INCREMENT,
  `idUstanova` int(11) DEFAULT NULL,
  `ime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `priimek` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `specializacija` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idZdravnik`),
  KEY `fk_Zdravnik_Ustanova_idx` (`idUstanova`),
  CONSTRAINT `fk_Zdravnik_Ustanova` FOREIGN KEY (`idUstanova`) REFERENCES `Ustanova` (`idUstanova`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zdravnik`
--

LOCK TABLES `Zdravnik` WRITE;
/*!40000 ALTER TABLE `Zdravnik` DISABLE KEYS */;
INSERT INTO `Zdravnik` VALUES (1,1,'Bojan','Bojanov',NULL),(2,2,'Erazem','Erazmov',NULL),(3,1,'Janez','Novak',NULL),(4,2,'Jernej','Kovač',NULL);
/*!40000 ALTER TABLE `Zdravnik` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-14 17:50:47
