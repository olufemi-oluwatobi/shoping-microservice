-- MySQL dump 10.13  Distrib 5.7.25, for Linux (i686)
--
-- Host: localhost    Database: cv
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.16.04.2

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
-- Table structure for table `Departments`
--

DROP TABLE IF EXISTS `Departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Departments` (
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `manager_id` int(11) DEFAULT NULL,
  `createdAt` varchar(255) NOT NULL DEFAULT '1555347404100',
  `updatedAt` varchar(255) NOT NULL DEFAULT '1555347404100',
  PRIMARY KEY (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departments`
--

LOCK TABLES `Departments` WRITE;
/*!40000 ALTER TABLE `Departments` DISABLE KEYS */;
INSERT INTO `Departments` VALUES (1,'Health',1,'1555347404100','1555347404100'),(2,'Games',2,'1555347404100','1555347404100'),(3,'Baby',3,'1555347404100','1555347404100'),(4,'Industrial',4,'1555347404100','1555347404100'),(5,'Tools',5,'1555347404100','1555347404100'),(6,'Health',6,'1555347404100','1555347404100'),(7,'Electronics',7,'1555347404100','1555347404100'),(8,'Sports',8,'1555347404100','1555347404100'),(9,'Shoes',9,'1555347404100','1555347404100'),(10,'Garden',10,'1555347404100','1555347404100');
/*!40000 ALTER TABLE `Departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employees`
--

DROP TABLE IF EXISTS `Employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employees` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `middle_initial` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `home_phone` varchar(255) DEFAULT NULL,
  `office_phone` varchar(255) DEFAULT NULL,
  `office_location` char(50) DEFAULT NULL,
  `manager_id` varchar(255) DEFAULT NULL,
  `vacation_hours` varchar(255) DEFAULT NULL,
  `sick_leave_hours` varchar(255) DEFAULT NULL,
  `createdAt` varchar(255) NOT NULL DEFAULT '1555347365930',
  `updatedAt` varchar(255) NOT NULL DEFAULT '1555347365930',
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employees`
--

LOCK TABLES `Employees` WRITE;
/*!40000 ALTER TABLE `Employees` DISABLE KEYS */;
INSERT INTO `Employees` VALUES (1,'Graham','Rubie','T','male','405 Merl Fields','Rowenamouth','Cambridgeshire','MZ','(209) 219-9293 x817','277-994-4946 x930','2339 Fahey Wells, Johnsshire, Monaco','1','100','100','1555347365930','1555347365930'),(2,'Bahringer','Melba','H','female','00533 Quigley Loop','Bauchshire','Bedfordshire','GF','615-278-6005','014.534.5619 x823','707 Elroy Island, East Caitlyn, Ethiopia','2','200','200','1555347365930','1555347365930'),(3,'Mueller','Ari','K','male','6384 Kali Road','Lake Catharinefort','Cambridgeshire','MR','1-553-744-1618','1-185-126-0034 x575','617 Logan Crescent, Ryanland, Kenya','3','300','300','1555347365930','1555347365930'),(4,'Mante','Diana','L','female','92287 Schmitt Trail','Hodkiewiczland','Avon','GL','1-526-826-7188 x998','(542) 364-5660 x0916','679 Wiegand Unions, Camillaland, Sweden','4','400','400','1555347365930','1555347365930'),(5,'Tromp','Lavern','J','male','35842 Stanton Row','Chestertown','Cambridgeshire','ER','467.458.7021','1-935-547-2626 x0302','023 Gisselle Loaf, West Edwinaland, Liberia','5','500','500','1555347365930','1555347365930');
/*!40000 ALTER TABLE `Employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Job_History`
--

DROP TABLE IF EXISTS `Job_History`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Job_History` (
  `title_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `pay` varchar(255) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `createdAt` varchar(255) NOT NULL DEFAULT '1555347404430',
  `updatedAt` varchar(255) NOT NULL DEFAULT '1555347404430'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Job_History`
--

LOCK TABLES `Job_History` WRITE;
/*!40000 ALTER TABLE `Job_History` DISABLE KEYS */;
INSERT INTO `Job_History` VALUES (1,1,'Mon Feb 18 2019 05:17:18 GMT+0100 (WAT)','633.01',1,'1555347404430','1555347404430'),(2,2,'Wed Aug 15 2018 10:22:35 GMT+0100 (WAT)','295.55',2,'1555347404430','1555347404430'),(3,3,'Tue Feb 12 2019 02:32:23 GMT+0100 (WAT)','214.05',3,'1555347404430','1555347404430'),(4,4,'Fri Oct 19 2018 04:38:33 GMT+0100 (WAT)','268.33',4,'1555347404430','1555347404430'),(5,5,'Thu Jun 28 2018 00:05:41 GMT+0100 (WAT)','531.27',6,'1555347404430','1555347404430'),(6,6,'Tue Jun 26 2018 13:20:28 GMT+0100 (WAT)','817.96',1,'1555347404430','1555347404430'),(7,7,'Fri Mar 29 2019 07:20:57 GMT+0100 (WAT)','10.08',2,'1555347404430','1555347404430'),(1,8,'Fri Feb 01 2019 10:24:45 GMT+0100 (WAT)','537.72',3,'1555347404430','1555347404430'),(2,9,'Tue Nov 27 2018 16:28:25 GMT+0100 (WAT)','298.06',4,'1555347404430','1555347404430'),(3,10,'Fri Dec 14 2018 22:36:17 GMT+0100 (WAT)','760.38',0,'1555347404430','1555347404430'),(4,11,'Sun Jun 17 2018 17:45:32 GMT+0100 (WAT)','203.78',1,'1555347404430','1555347404430'),(5,12,'Tue Sep 18 2018 15:08:12 GMT+0100 (WAT)','895.48',2,'1555347404430','1555347404430'),(6,13,'Tue May 01 2018 00:29:54 GMT+0100 (WAT)','115.03',3,'1555347404430','1555347404430'),(0,14,'Mon Aug 13 2018 05:13:59 GMT+0100 (WAT)','457.85',4,'1555347404430','1555347404430'),(1,15,'Thu Jan 24 2019 17:04:22 GMT+0100 (WAT)','960.22',0,'1555347404430','1555347404430');
/*!40000 ALTER TABLE `Job_History` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20190415145013-create-employee.js'),('departments.js'),('jobHistory.js'),('titles.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Titles`
--

DROP TABLE IF EXISTS `Titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Titles` (
  `title_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `Job_description` varchar(255) DEFAULT NULL,
  `low_pay` varchar(255) DEFAULT NULL,
  `high_pay` varchar(255) DEFAULT NULL,
  `createdAt` varchar(255) NOT NULL DEFAULT '1555347404836',
  `updatedAt` varchar(255) NOT NULL DEFAULT '1555347404836',
  PRIMARY KEY (`title_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Titles`
--

LOCK TABLES `Titles` WRITE;
/*!40000 ALTER TABLE `Titles` DISABLE KEYS */;
INSERT INTO `Titles` VALUES (1,'National Accounts Facilitator','2','Principal','643.37','10313.39','1555347404836','1555347404836'),(2,'Human Intranet Officer','3','Dynamic','422.16','2056.81','1555347404836','1555347404836'),(3,'Lead Marketing Producer','4','Corporate','514.15','30955.61','1555347404836','1555347404836'),(4,'Lead Web Engineer','5','Corporate','826.06','40929.06','1555347404836','1555347404836'),(5,'Legacy Research Producer','6','Central','653.90','50350.57','1555347404836','1555347404836'),(6,'Chief Mobility Orchestrator','7','Regional','374.64','6050.07','1555347404836','1555347404836');
/*!40000 ALTER TABLE `Titles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-16 11:31:16
