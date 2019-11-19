-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema solicitudes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `solicitudes` DEFAULT CHARACTER SET utf8 ;
USE `solicitudes` ;

-- -----------------------------------------------------
-- Table `solicitudes`.`Delegacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`delegacion` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`delegacion` (
  `idDelegacion` INT NOT NULL AUTO_INCREMENT,
  `Descripcion` VARCHAR(45) NULL,
  `PersonaDelegada` VARCHAR(45) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `idUserCreate` INT NULL,
  `idUserUpdate` INT NULL,
  PRIMARY KEY (`idDelegacion`))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
