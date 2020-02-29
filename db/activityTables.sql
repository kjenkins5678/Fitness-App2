-- **********************************************
-- **********************************************

CREATE TABLE `activity_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `activities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `activity_name` varchar(255) NOT NULL,
  `met` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_activity_category` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_activity_category` (`fk_activity_category`),
  CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`fk_activity_category`) REFERENCES `activity_categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


