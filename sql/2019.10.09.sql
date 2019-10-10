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
  `user_name` VARCHAR(12) NOT NULL,
  `password` VARCHAR(12) NOT NULL,
  `avatar_url` TEXT NULL,
  `observaciones` VARCHAR(150) NULL,
  `time_create` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `time_update` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `idUser_create` INT NULL,
  `idUser_update` INT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `userName_UNIQUE` ON `solicitudes`.`user` (`user_name` ASC) VISIBLE;

CREATE UNIQUE INDEX `email_UNIQUE` ON `solicitudes`.`user` (`email` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`userRol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`userRol` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`userRol` (
  `idUserRol` INT NOT NULL AUTO_INCREMENT,
  `rol_idRol` INT NOT NULL,
  `user_idUser` INT NOT NULL,
  `time_create` TIMESTAMP NULL,
  `time_update` TIMESTAMP NULL,
  `idUser_create` INT NULL,
  `idUser_update` INT NULL,
  PRIMARY KEY (`idUserRol`),
  CONSTRAINT `fk_userRol_rol`
    FOREIGN KEY (`rol_idRol`)
    REFERENCES `solicitudes`.`rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_userRol_user`
    FOREIGN KEY (`user_idUser`)
    REFERENCES `solicitudes`.`user` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_userRol_rol_idx` ON `solicitudes`.`userRol` (`rol_idRol` ASC) INVISIBLE;
CREATE INDEX `fk_userRol_user_idx` ON `solicitudes`.`userRol` (`user_idUser` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
