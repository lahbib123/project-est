drop database if exists est;
create database est;
use est;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
INSERT INTO `admin` (`id`, `email`, `password`)
VALUES (1, 'lahbib@gmail.com', 'lahbib'),
  (2, 'jamal@gmail.com', 'jamal');
CREATE TABLE `detail` (
  `id` int(11) NOT NULL,
  `intitule` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `lien` varchar(255) NOT NULL,
  `typologie` varchar(255) NOT NULL,
  `projet_cree` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `secteur` varchar(255) NOT NULL,
  `beneficie` varchar(255) NOT NULL,
  `id_profil` varchar(200) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
CREATE TABLE `msg` (
  `id` int(11) NOT NULL,
  `full_name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `msg` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
CREATE TABLE `profil` (
  `id_profil` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `identifiant` varchar(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(60) NOT NULL,
  `adresse1` varchar(100) NOT NULL,
  `adresse2` varchar(100) NOT NULL,
  `lieu` varchar(100) NOT NULL,
  `experience` varchar(255) NOT NULL,
  `communication` varchar(255) NOT NULL,
  `situation` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
ALTER TABLE `admin`
ADD PRIMARY KEY (`id`);
ALTER TABLE `detail`
ADD PRIMARY KEY (`id`);
ALTER TABLE `msg`
ADD PRIMARY KEY (`id`);
ALTER TABLE `profil`
ADD PRIMARY KEY (`id_profil`);
ALTER TABLE `admin`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 3;
ALTER TABLE `detail`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 16;
ALTER TABLE `msg`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 9;