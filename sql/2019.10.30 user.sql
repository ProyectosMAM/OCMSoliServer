-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema solicitudes
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `solicitudes` ;

-- -----------------------------------------------------
-- Schema solicitudes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `solicitudes` DEFAULT CHARACTER SET utf8 ;
USE `solicitudes` ;

-- -----------------------------------------------------
-- Table `solicitudes`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`user` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`user` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `apellido1` VARCHAR(45) NULL,
  `apellido2` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `userName` VARCHAR(12) NOT NULL,
  `password` VARCHAR(12) NOT NULL,
  `avatarUrl` TEXT NULL,
  `observaciones` VARCHAR(150) NULL,
  `createAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `idUserCreate` INT NULL,
  `idUserUpdate` INT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `userName_UNIQUE` ON `solicitudes`.`user` (`userName` ASC) VISIBLE;

CREATE UNIQUE INDEX `email_UNIQUE` ON `solicitudes`.`user` (`email` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
