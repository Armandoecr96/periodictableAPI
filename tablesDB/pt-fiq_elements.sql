-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: pt-fiq
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `elements`
--

DROP TABLE IF EXISTS `elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `elements` (
  `atomicNumber` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `symbol` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `period` varchar(45) NOT NULL,
  `group` varchar(45) NOT NULL,
  `atomicWeight` float(10,2) NOT NULL,
  PRIMARY KEY (`atomicNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elements`
--

LOCK TABLES `elements` WRITE;
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
INSERT INTO `elements` VALUES (1,'Hidrógeno','H','#D2D2D2','1','i-A',1.01),(2,'Helio','He','#D2D2D2','1','VIII-A',4.00),(3,'Litio','Li','#D2D2D2','2','I-A',6.94),(4,'Berilio','Be','#D2D2D2','2','II-A',9.01),(5,'Boro','B','#D2D2D2','2','III-A',10.81),(6,'Carbono','C','#D2D2D2','2','IV-A',12.01),(7,'Nitrógeno','N','#D2D2D2','2','V-A',14.01),(8,'Oxigeno','O','#D2D2D2','2','VI-A',15.99),(9,'Flúor','F','#D2D2D2','2','VII-A',18.99),(10,'Neón','Ne','#D2D2D2','2','VIII-A',20.18),(11,'Sodio','Na','#D2D2D2','3','I-A',22.99),(12,'Magnesio','Mg','#D2D2D2','3','II-A',24.31),(13,'Aluminio','Al','#','3','III-A',26.98),(14,'Silicio','Si','#','3','IV-A',28.09),(15,'Fósforo','P','#','3','V-A',30.97),(16,'Azufre','S','#','3','VI-A',32.09),(17,'Cloro','Cl','#','3','VII-A',35.45),(18,'Argón','Ar','#','3','VIII-A',39.95),(19,'Potasio','K','#','4','I-A',39.10),(20,'Calcio','Ca','#','4','II-A',40.08),(21,'Escandio','Sc','#','4','III-B',44.96),(22,'Titanio','Ti','#','4','IV-B',47.88),(23,'Vanadio','V','#','4','V-B',50.94),(24,'Cromo','Cr','#','4','VI-B',51.99),(25,'Manganeso','Mn','#','4','VII-B',54.94),(26,'Hierro','Fe','#','4','VIII-B',55.85),(27,'Cobalto','Co','#','4','VIII-B',58.93),(28,'Niquel','Ni','#','4','VIII-B',58.69),(29,'Cobre','Cu','#','4','I-B',63.55),(30,'Zinc','Zn','#','4','II-B',65.39),(31,'Galio','Ga','#','4','III-A',69.72),(32,'Germanio','Ge','#','4','IV-A',72.59),(33,'Arsénico','As','#','4','V-A',74.94),(34,'Selenio','Se','#','4','VI-A',78.96),(35,'Bromo','Br','#','4','VII-A',79.90),(36,'Kriptón','Kr','#','4','VIII-A',83.95),(37,'Rubidio','Rb','#','5','I-A',85.47),(38,'Estroncio','Sr','#','5','II-A',87.62),(39,'Itrio','Y','#','5','III-B',88.91),(40,'Zirconio','Zr','#','5','IV-B',91.22),(41,'Niobio','Nb','#','5','V-B',92.91),(42,'Molibdeno','Mo','#','5','VI-B',95.94),(43,'Tecnecio','Tc','#','5','VII-B',98.00),(44,'Rutenio','Ru','#','5','VIII-B',101.07),(45,'Rodio','Rh','#','5','VIII-B',102.90),(46,'Paladio','Pd','#','5','VIII-B',106.42),(47,'Plata','Ag','#','5','I-B',107.87),(48,'Cadmio','Cd','#','5','II-B',112.41),(49,'Indio','In','#','5','III-A',114.82),(50,'Estaño','Sn','#','5','IV-A',118.71),(51,'Antimonio','Sb','#','5','V-A',121.75),(52,'Telurio','Te','#','5','VI-A',127.60),(53,'Yodo','I','#','5','VII-A',126.91),(54,'Xenón','Xe','#','5','VIII-A',131.29),(55,'Cesio','Cs','#','6','I-A',132.91),(56,'Bario','Ba','#','6','II-A',137.33),(57,'Lantano','La','#','6','III-B',138.92),(58,'Cerio','Ce','#','6','III-B',140.12),(59,'Praseodimio','Pr','#','6','III-B',140.91),(60,'Neodimio','Nd','#','6','III-B',144.24),(61,'Prometio','Pm','#','6','III-B',145.00),(62,'Samario','Sm','#','6','III-B',150.36),(63,'Europio','Eu','#','6','III-B',151.96),(64,'Gadolinio','Gd','#','6','III-B',157.25),(65,'Terbio','Tb','#','6','III-B',158.93),(66,'Disprosio','Dy','#','6','III-B',162.50),(67,'Holmio','Ho','#','6','III-B',164.93),(68,'Erbio','Er','#','6','III-B',167.26),(69,'Tulio','Tm','#','6','III-B',168.93),(70,'Iterbio','Yb','#','6','III-B',173.04),(71,'Lutencio','Lu','#','6','III-B',174.97),(72,'Hafrio','Hf','#','6','IV-B',178.49),(73,'Tantalio','Ta','#','6','V-B',180.95),(74,'Tugsteno','W','#','6','VI-B',183.85),(75,'Renio','Re','#','6','VII-B',186.21),(76,'Osmio','Os','#','6','VIII-B',190.20),(77,'Iridio','Ir','#','6','VIII-B',192.22),(78,'Platino','Pt','#','6','VIII-B',195.08),(79,'Oro','Au','#','6','I-B',196.97),(80,'Mercurio','Hg','#','6','II-B',200.59),(81,'Talio','Tl','#','6','III-A',204.38),(82,'Plomo','Pb','#','6','IV-A',207.20),(83,'Bismuto','Bi','#','6','V-A',208.98),(84,'Polonio','Po','#','6','VI-A',209.00),(85,'Astano','At','#','6','VII-A',210.00),(86,'Radón','Rn','#','6','VIII-A',222.00),(87,'Francio','Fr','#','7','I-A',223.00),(88,'Radio','Ra','#','7','II-A',226.03),(89,'Actinido','Ac','#','7','III-B',227.03),(90,'Torio','Th','#','7','III-B',232.04),(91,'Protactinio','Pa','#','7','III-B',231.04),(92,'Uranio','U','#','7','III-B',238.03),(93,'Neptunio','Np','#','7','III-B',237.08),(94,'Plutonio','Pu','#','7','III-B',244.06),(95,'Americio','Am','#','7','III-B',243.06),(96,'Curio','Cm','#','7','III-B',247.00),(97,'Berkelio','Bk','#','7','III-B',247.07),(98,'Californio','Cf','#','7','III-B',251.08),(99,'Einstenio','Es','#','7','III-B',252.03),(100,'Fermio','Fm','#','7','III-B',257.09),(101,'Mendelevio','Md','#','7','III-B',258.00),(102,'Nobelio','No','#','7','III-B',259.00),(103,'Laurencio','Lr','#','7','III-B',262.00),(104,'Rutherfordio','Rf','#','7','IV-B',261.00),(105,'Dubnio','Db','#','7','V-B',262.00),(106,'Seaborgio','Sg','#','7','VI-B',266.00),(107,'Bohrio','Bh','#','7','VII-B',264.00),(108,'Hassio','Hs','#','7','VIII-B',277.00),(109,'Meitnerio','Mt','#','7','VIII-B',268.00),(110,'Darmstatio','Ds','#','7','VIII-B',271.00),(111,'Roentgenio','Rg','#','7','I-B',272.00),(112,'Copernicio','Cn','#','7','II-B',285.00),(113,'Nihonio','Nh','#','7','III-A',284.00),(114,'Flerovio','Fl','#','7','IV-A',289.00),(115,'Moscovio','Mc','#','7','V-A',288.00),(116,'Livermorio','Lv','#','7','VI-A',292.00),(117,'Tenseo','Ts','#','7','VII-A',294.00),(118,'Oganesón','Og','#','7','VIII-A',294.00);
/*!40000 ALTER TABLE `elements` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-20 12:33:09
