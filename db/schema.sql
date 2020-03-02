DROP DATABASE IF EXISTS fitness_app2_db;

CREATE DATABASE fitness_app2_db;

USE fitness_app2_db;

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

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `height_inches` int NOT NULL,
  `height_cm` decimal(10,0) DEFAULT NULL,
  `weight_lb` int NOT NULL,
  `weight_kg` decimal(10,0) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `activity_level` varchar(255) DEFAULT NULL,
  `goal` varchar(255) DEFAULT NULL,
  `calories_per_day` decimal(10,0) DEFAULT NULL,
  `fat_per_day` decimal(10,0) DEFAULT NULL,
  `carbs_per_day` decimal(10,0) DEFAULT NULL,
  `protein_per_day` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user_activities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `activity_dt` datetime NOT NULL,
  `duration` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_user` int, 
  PRIMARY KEY (`id`),
  KEY `fk_user` (`fk_user`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE FdNutritionSummary (
  FoodId int NOT NULL,
  FdGrp_Desc varchar(50) not null,
  FdGrp_Cd varchar(10) null,
  FdName varchar(200) not null,
  Amount float not null,
  Msre_Desc varchar(100) ,
  Gm_Wgt float null,
  msre varchar(100) null,
  Calories float not null,
  Protein float not null,
  Fat float not null,
  Carbohydrates float not null,
  PRIMARY KEY (FoodId)
) 


