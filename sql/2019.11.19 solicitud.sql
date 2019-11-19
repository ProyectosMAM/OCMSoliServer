- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema solicitudes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema solicitudes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `solicitudes` DEFAULT CHARACTER SET utf8 ;
USE `solicitudes` ;

-- -----------------------------------------------------
-- Table `solicitudes`.`Solicitudes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Solicitud` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Solicitud` (
  `idSolicitudes` INT NOT NULL,
  `FechaEntradaOCM` DATE NULL,
  `idSolicitantes` INT NULL,
  `idEstados` INT NULL,
  `idInstituciones` INT NULL,
  `idDocumentos` INT NULL,
  `idDistrito` INT NULL,
  `idDelegacion` INT NULL,
  `Distritos_idDistritos` INT NOT NULL,
  `AprobadaOCM` BIT NULL,
  `FechaAprobacionOCM` DATE NULL,
  `FechaPresentacion` DATE NULL,
  `FechaInicioExpediente` DATE NULL,
  `TextoCabecera` VARCHAR(45) NULL,
  `TextoSolicitud` VARCHAR(245) NULL,
  `SolicitudPrevia` TINYINT NULL,
  `Observaciones` VARCHAR(45) NULL,
  `Instituciones_idInstituciones` INT NOT NULL,
  `Solicitantes_idSolicitantes` INT NOT NULL,
  `Estados_idEstados` INT NOT NULL,
  `FechaContestacion` DATE NULL,
  `Imagen` BLOB NULL,
  `SeguimientoSolicitante` TINYINT NULL,
  `idPrograma` INT NULL,
  `idEconomico` INT NULL,
  `GradoRespuesta` INT NULL,
  `Delegaciones_idDelegaciones` INT NOT NULL,
  `Estados_idEstados1` INT NOT NULL,
   `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `idUserCreate` INT NULL,
  `idUserUpdate` INT NULL,
  PRIMARY KEY (`idSolicitudes`, `Distritos_idDistritos`, `Instituciones_idInstituciones`, `Solicitantes_idSolicitantes`, `Estados_idEstados`, `Delegaciones_idDelegaciones`))
  ENGINE = InnoDB;

CREATE INDEX `fk_Solicitudes_Instituciones1_idx` ON `solicitudes`.`Solicitud` (`Instituciones_idInstituciones` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Solicitantes1_idx` ON `solicitudes`.`Solicitud` (`Solicitantes_idSolicitantes` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Distritos1_idx` ON `solicitudes`.`Solicitud` (`Distritos_idDistritos` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Delegaciones1_idx` ON `solicitudes`.`Solicitud` (`idDelegacion` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Estados1_idx` ON `solicitudes`.`Solicitud` (`idEstados` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Economicos1_idx` ON `solicitudes`.`Solicitud` (`idEconomico` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
