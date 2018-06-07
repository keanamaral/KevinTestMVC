-- Project 2: Test Database "tourFinder" Database

DROP DATABASE IF EXISTS tourFinder_db;
CREATE DATABASE tourFinder_db;
USE tourFinder_db;
CREATE TABLE tourInfo(
   id int NOT NULL AUTO_INCREMENT,
   tourName VARCHAR(255),
   tourDescription VARCHAR(255),
   tourInstructions VARCHAR(255),
   PRIMARY KEY (id)
);