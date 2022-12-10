-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `fk_authorId` int NOT NULL,
  `fk_postsId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `commentAuthor_idx` (`fk_authorId`),
  KEY `commentPost_idx` (`fk_postsId`),
  CONSTRAINT `commentAuthor` FOREIGN KEY (`fk_authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `commentPost` FOREIGN KEY (`fk_postsId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'test comment',2,4,'2022-12-07 22:38:03'),(2,'asdfas',2,4,'2022-12-07 22:45:56'),(3,'new test comment',2,4,'2022-12-07 22:58:13'),(4,'new test comment2',2,4,'2022-12-07 22:59:43'),(5,'asdfas',2,4,'2022-12-07 23:03:31'),(6,'hi this is a comment',2,4,'2022-12-09 18:43:56');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `fk_authorId` int NOT NULL,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `postauthor_idx` (`fk_authorId`),
  CONSTRAINT `postauthor` FOREIGN KEY (`fk_authorId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'test','test','public\\images\\uploads\\uploadImage-1670173300061-428782743.jpeg','public/images/uploads/thumbnail-uploadImage-1670173300061-428782743.jpeg',2,'2022-12-04 09:01:40'),(2,'test2','test2','public\\images\\uploads\\uploadImage-1670173376656-186307625.jpeg','public/images/uploads/thumbnail-uploadImage-1670173376656-186307625.jpeg',2,'2022-12-04 09:02:56'),(3,'test3','test3','public\\images\\uploads\\uploadImage-1670173471614-890279607.jpeg','public/images/uploads/thumbnail-uploadImage-1670173471614-890279607.jpeg',2,'2022-12-04 09:04:31'),(4,'test4','test4','public\\images\\uploads\\uploadImage-1670173517529-694203214.jpeg','public/images/uploads/thumbnail-uploadImage-1670173517529-694203214.jpeg',2,'2022-12-04 09:05:17'),(5,'test5','test5','public\\images\\uploads\\uploadImage-1670173611970-658743829.jpeg','public/images/uploads/thumbnail-uploadImage-1670173611970-658743829.jpeg',2,'2022-12-04 09:06:52'),(6,'test6','test6','public\\images\\uploads\\uploadImage-1670173704919-902664303.jpeg','public/images/uploads/thumbnail-uploadImage-1670173704919-902664303.jpeg',2,'2022-12-04 09:08:24'),(7,'test7','test7','public\\images\\uploads\\uploadImage-1670173795374-259689099.jpeg','public/images/uploads/thumbnail-uploadImage-1670173795374-259689099.jpeg',2,'2022-12-04 09:09:55'),(8,'test8','test8','public\\images\\uploads\\uploadImage-1670340136958-509981057.jpeg','public/images/uploads/thumbnail-uploadImage-1670340136958-509981057.jpeg',3,'2022-12-06 07:22:17'),(9,'test9','This is a sample of a long description that I will use to see how the formatting looks when the description is actually pretty long. These words have no meaning and there is no connection to these words I am currentyl typing out now with the image above. Turtles all the way down.','public\\images\\uploads\\uploadImage-1670466827670-460219085.jpeg','public/images/uploads/thumbnail-uploadImage-1670466827670-460219085.jpeg',2,'2022-12-07 18:33:47'),(10,'sample','sample','public\\images\\uploads\\uploadImage-1670468038561-902028345.webp','public/images/uploads/thumbnail-uploadImage-1670468038561-902028345.webp',2,'2022-12-07 18:53:58'),(11,'sample','sample','public\\images\\uploads\\uploadImage-1670468060842-457866170.webp','public/images/uploads/thumbnail-uploadImage-1670468060842-457866170.webp',2,'2022-12-07 18:54:20'),(12,'sample','sample','public\\images\\uploads\\uploadImage-1670468082131-638351463.webp','public/images/uploads/thumbnail-uploadImage-1670468082131-638351463.webp',2,'2022-12-07 18:54:42'),(13,'sample','sample','public\\images\\uploads\\uploadImage-1670468102182-224983685.webp','public/images/uploads/thumbnail-uploadImage-1670468102182-224983685.webp',2,'2022-12-07 18:55:02'),(14,'sample','sample','public\\images\\uploads\\uploadImage-1670468121135-40708132.webp','public/images/uploads/thumbnail-uploadImage-1670468121135-40708132.webp',2,'2022-12-07 18:55:21'),(15,'test10','test10','public\\images\\uploads\\uploadImage-1670483104019-940643461.webp','public/images/uploads/thumbnail-uploadImage-1670483104019-940643461.webp',2,'2022-12-07 23:05:04'),(16,'test','test','public\\images\\uploads\\uploadImage-1670640150919-703873409.webp','public/images/uploads/thumbnail-uploadImage-1670640150919-703873409.webp',2,'2022-12-09 18:42:31');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('6ofOfmXPoJ8uarg66v4xcZ7XdLcVP8mZ',1670728217,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"userId\":2,\"username\":\"sample1\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'sample1','sample1@sample.com','$2b$04$jIKjFqJzY3hdwlCXlP0LIe4x9dBLjjg5voyOtH7d2bFHWvxkKPkbi','2022-12-01 05:02:43'),(3,'sample2','sample2@sample','$2b$04$Mfsw71p6jr1xEDe4pD0K1OIsXTveO1lzvrkAe7rGImEfBNMvEwKbG','2022-12-06 07:20:31');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-09 19:15:30
