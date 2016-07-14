+----------------------+
| Tables_in_appmojstri |
+----------------------+
| Odziv                |
| Pacient              |
| Prijava              |
| Termin               |
| Ustanova             |
| Zdravnik             |
+----------------------+

show create table Odziv;
| Odziv | CREATE TABLE `Odziv` (
  `idOdziv` int(11) NOT NULL AUTO_INCREMENT,
  `prijavaPotrjena` tinyint(1) DEFAULT NULL,
  `komentar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idOdziv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 |


show create table Pacient;
| Pacient | CREATE TABLE `Pacient` (
  `idPacient` int(11) NOT NULL AUTO_INCREMENT,
  `zdravstvenaKartica` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `ime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `priimek` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idPacient`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 |

show create table Prijava;
| Prijava | CREATE TABLE `Prijava` (
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 |

show create table Termin;
| Termin | CREATE TABLE `Termin` (
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 |


show create table Ustanova;
| Ustanova | CREATE TABLE `Ustanova` (
  `idUstanova` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `naslov` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idUstanova`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 |

show create table Zdravnik;
| Zdravnik | CREATE TABLE `Zdravnik` (
  `idZdravnik` int(11) NOT NULL AUTO_INCREMENT,
  `idUstanova` int(11) DEFAULT NULL,
  `ime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `priimek` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  `specializacija` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`idZdravnik`),
  KEY `fk_Zdravnik_Ustanova_idx` (`idUstanova`),
  CONSTRAINT `fk_Zdravnik_Ustanova` FOREIGN KEY (`idUstanova`) REFERENCES `Ustanova` (`idUstanova`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 |

