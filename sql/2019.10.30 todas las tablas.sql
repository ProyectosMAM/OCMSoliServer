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
-- Table `solicitudes`.`Instituciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Instituciones` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Instituciones` (
  `idInstituciones` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(45) NULL,
  PRIMARY KEY (`idInstituciones`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `solicitudes`.`Solicitantes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Solicitantes` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Solicitantes` (
  `idSolicitantes` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(45) NULL,
  `CorreoElectronico` VARCHAR(45) NULL,
  PRIMARY KEY (`idSolicitantes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `solicitudes`.`Distritos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Distritos` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Distritos` (
  `idDistritos` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(45) NULL,
  `Distritoscol` VARCHAR(45) NULL,
  PRIMARY KEY (`idDistritos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `solicitudes`.`Delegaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Delegaciones` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Delegaciones` (
  `idDelegaciones` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `PersonaDelegada` VARCHAR(45) NULL,
  PRIMARY KEY (`idDelegaciones`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `solicitudes`.`Estados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Estados` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Estados` (
  `idEstados` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(45) NULL,
  `FechaInicio` DATE NULL,
  `FechaFinal` VARCHAR(45) NULL,
  PRIMARY KEY (`idEstados`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `solicitudes`.`Economicos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Economicos` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Economicos` (
  `idEconomicos` INT NOT NULL,
  PRIMARY KEY (`idEconomicos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `solicitudes`.`Solicitudes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Solicitudes` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Solicitudes` (
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
  PRIMARY KEY (`idSolicitudes`, `Distritos_idDistritos`, `Instituciones_idInstituciones`, `Solicitantes_idSolicitantes`, `Estados_idEstados`, `Delegaciones_idDelegaciones`),
  CONSTRAINT `fk_Solicitudes_Instituciones10`
    FOREIGN KEY (`Instituciones_idInstituciones`)
    REFERENCES `solicitudes`.`Instituciones` (`idInstituciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Solicitantes10`
    FOREIGN KEY (`Solicitantes_idSolicitantes`)
    REFERENCES `solicitudes`.`Solicitantes` (`idSolicitantes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Distritos10`
    FOREIGN KEY (`Distritos_idDistritos`)
    REFERENCES `solicitudes`.`Distritos` (`idDistritos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Delegaciones0`
    FOREIGN KEY (`idDelegacion`)
    REFERENCES `solicitudes`.`Delegaciones` (`idDelegaciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Estados0`
    FOREIGN KEY (`idEstados`)
    REFERENCES `solicitudes`.`Estados` (`idEstados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Economicos0`
    FOREIGN KEY (`idEconomico`)
    REFERENCES `solicitudes`.`Economicos` (`idEconomicos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Solicitudes_Instituciones1_idx` ON `solicitudes`.`Solicitudes` (`Instituciones_idInstituciones` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Solicitantes1_idx` ON `solicitudes`.`Solicitudes` (`Solicitantes_idSolicitantes` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Distritos1_idx` ON `solicitudes`.`Solicitudes` (`Distritos_idDistritos` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Delegaciones1_idx` ON `solicitudes`.`Solicitudes` (`idDelegacion` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Estados1_idx` ON `solicitudes`.`Solicitudes` (`idEstados` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Economicos1_idx` ON `solicitudes`.`Solicitudes` (`idEconomico` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`Documentos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Documentos` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Documentos` (
  `idDocumentos` INT NOT NULL,
  `idSolicitudes` INT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(45) NULL,
  `Fecha` DATE NULL,
  `Ruta` VARCHAR(45) NULL,
  `Estados_idEstados` INT NOT NULL,
  PRIMARY KEY (`idDocumentos`, `Estados_idEstados`),
  CONSTRAINT `fk_Documentos_Estados1`
    FOREIGN KEY (`Estados_idEstados`)
    REFERENCES `solicitudes`.`Estados` (`idEstados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Documentos_Estados1_idx` ON `solicitudes`.`Documentos` (`Estados_idEstados` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`Subsanaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Subsanaciones` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Subsanaciones` (
  `idSubsanaciones` INT NOT NULL,
  `Fecha` DATE NULL,
  `Observaciones` VARCHAR(45) NULL,
  `Instituciones_idInstituciones` INT NOT NULL,
  PRIMARY KEY (`idSubsanaciones`, `Instituciones_idInstituciones`),
  CONSTRAINT `fk_Subsanaciones_Instituciones1`
    FOREIGN KEY (`Instituciones_idInstituciones`)
    REFERENCES `solicitudes`.`Instituciones` (`idInstituciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Subsanaciones_Instituciones1_idx` ON `solicitudes`.`Subsanaciones` (`Instituciones_idInstituciones` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`Tematicas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Tematicas` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Tematicas` (
  `idTematicas` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(45) NULL,
  `Solicitudes_idSolicitudes` INT NOT NULL,
  `Solicitudes_Distritos_idDistritos` INT NOT NULL,
  `Solicitudes_Instituciones_idInstituciones` INT NOT NULL,
  `Solicitudes_Solicitantes_idSolicitantes` INT NOT NULL,
  `Solicitudes_Estados_idEstados` INT NOT NULL,
  PRIMARY KEY (`idTematicas`, `Solicitudes_idSolicitudes`, `Solicitudes_Distritos_idDistritos`, `Solicitudes_Instituciones_idInstituciones`, `Solicitudes_Solicitantes_idSolicitantes`, `Solicitudes_Estados_idEstados`),
  CONSTRAINT `fk_Tematicas_Solicitudes1`
    FOREIGN KEY (`Solicitudes_idSolicitudes` , `Solicitudes_Distritos_idDistritos` , `Solicitudes_Instituciones_idInstituciones` , `Solicitudes_Solicitantes_idSolicitantes` , `Solicitudes_Estados_idEstados`)
    REFERENCES `solicitudes`.`Solicitudes` (`idSolicitudes` , `Distritos_idDistritos` , `Instituciones_idInstituciones` , `Solicitantes_idSolicitantes` , `Estados_idEstados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Tematicas_Solicitudes1_idx` ON `solicitudes`.`Tematicas` (`Solicitudes_idSolicitudes` ASC, `Solicitudes_Distritos_idDistritos` ASC, `Solicitudes_Instituciones_idInstituciones` ASC, `Solicitudes_Solicitantes_idSolicitantes` ASC, `Solicitudes_Estados_idEstados` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`GradosSatisfacionRespuesta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`GradosSatisfacionRespuesta` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`GradosSatisfacionRespuesta` (
  `idGradosSatisfacionRespuesta` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Observaciones` VARCHAR(45) NULL,
  `Solicitudes_idSolicitudes` INT NOT NULL,
  `Solicitudes_Distritos_idDistritos` INT NOT NULL,
  `Solicitudes_Instituciones_idInstituciones` INT NOT NULL,
  `Solicitudes_Solicitantes_idSolicitantes` INT NOT NULL,
  `Solicitudes_Estados_idEstados` INT NOT NULL,
  PRIMARY KEY (`idGradosSatisfacionRespuesta`, `Solicitudes_idSolicitudes`, `Solicitudes_Distritos_idDistritos`, `Solicitudes_Instituciones_idInstituciones`, `Solicitudes_Solicitantes_idSolicitantes`, `Solicitudes_Estados_idEstados`),
  CONSTRAINT `fk_GradosSatisfacionRespuesta_Solicitudes1`
    FOREIGN KEY (`Solicitudes_idSolicitudes` , `Solicitudes_Distritos_idDistritos` , `Solicitudes_Instituciones_idInstituciones` , `Solicitudes_Solicitantes_idSolicitantes` , `Solicitudes_Estados_idEstados`)
    REFERENCES `solicitudes`.`Solicitudes` (`idSolicitudes` , `Distritos_idDistritos` , `Instituciones_idInstituciones` , `Solicitantes_idSolicitantes` , `Estados_idEstados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_GradosSatisfacionRespuesta_Solicitudes1_idx` ON `solicitudes`.`GradosSatisfacionRespuesta` (`Solicitudes_idSolicitudes` ASC, `Solicitudes_Distritos_idDistritos` ASC, `Solicitudes_Instituciones_idInstituciones` ASC, `Solicitudes_Solicitantes_idSolicitantes` ASC, `Solicitudes_Estados_idEstados` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`Seguimientos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Seguimientos` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Seguimientos` (
  `idSeguimientos` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Fecha` DATE NULL,
  `Observaciones` VARCHAR(45) NULL,
  `Solicitudes_idSolicitudes` INT NOT NULL,
  `Solicitudes_Distritos_idDistritos` INT NOT NULL,
  `Solicitudes_Instituciones_idInstituciones` INT NOT NULL,
  `Solicitudes_Solicitantes_idSolicitantes` INT NOT NULL,
  `Solicitudes_Estados_idEstados` INT NOT NULL,
  PRIMARY KEY (`idSeguimientos`),
  CONSTRAINT `fk_Seguimientos_Solicitudes1`
    FOREIGN KEY (`Solicitudes_idSolicitudes` , `Solicitudes_Distritos_idDistritos` , `Solicitudes_Instituciones_idInstituciones` , `Solicitudes_Solicitantes_idSolicitantes` , `Solicitudes_Estados_idEstados`)
    REFERENCES `solicitudes`.`Solicitudes` (`idSolicitudes` , `Distritos_idDistritos` , `Instituciones_idInstituciones` , `Solicitantes_idSolicitantes` , `Estados_idEstados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Seguimientos_Solicitudes1_idx` ON `solicitudes`.`Seguimientos` (`Solicitudes_idSolicitudes` ASC, `Solicitudes_Distritos_idDistritos` ASC, `Solicitudes_Instituciones_idInstituciones` ASC, `Solicitudes_Solicitantes_idSolicitantes` ASC, `Solicitudes_Estados_idEstados` ASC) VISIBLE;


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
-- Table `solicitudes`.`rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`rol` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`rol` (
  `idRol` INT NOT NULL,
  `descripcion` VARCHAR(25) NULL,
  `observaciones` VARCHAR(150) NULL,
  `time_create` TIMESTAMP NULL,
  `time_update` TIMESTAMP NULL,
  `idUser_create` INT NULL,
  `idUser_update` INT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `solicitudes`.`Programas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Programas` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Programas` (
  `idProgramas` INT NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Solicitudes_idSolicitudes` INT NOT NULL,
  `Solicitudes_Distritos_idDistritos` INT NOT NULL,
  `Solicitudes_Instituciones_idInstituciones` INT NOT NULL,
  `Solicitudes_Solicitantes_idSolicitantes` INT NOT NULL,
  `Solicitudes_Estados_idEstados` INT NOT NULL,
  PRIMARY KEY (`idProgramas`, `Solicitudes_idSolicitudes`, `Solicitudes_Distritos_idDistritos`, `Solicitudes_Instituciones_idInstituciones`, `Solicitudes_Solicitantes_idSolicitantes`, `Solicitudes_Estados_idEstados`),
  CONSTRAINT `fk_Programas_Solicitudes1`
    FOREIGN KEY (`Solicitudes_idSolicitudes` , `Solicitudes_Distritos_idDistritos` , `Solicitudes_Instituciones_idInstituciones` , `Solicitudes_Solicitantes_idSolicitantes` , `Solicitudes_Estados_idEstados`)
    REFERENCES `solicitudes`.`Solicitudes` (`idSolicitudes` , `Distritos_idDistritos` , `Instituciones_idInstituciones` , `Solicitantes_idSolicitantes` , `Estados_idEstados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Programas_Solicitudes1_idx` ON `solicitudes`.`Programas` (`Solicitudes_idSolicitudes` ASC, `Solicitudes_Distritos_idDistritos` ASC, `Solicitudes_Instituciones_idInstituciones` ASC, `Solicitudes_Solicitantes_idSolicitantes` ASC, `Solicitudes_Estados_idEstados` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`Solicitudes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`Solicitudes` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`Solicitudes` (
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
  PRIMARY KEY (`idSolicitudes`, `Distritos_idDistritos`, `Instituciones_idInstituciones`, `Solicitantes_idSolicitantes`, `Estados_idEstados`, `Delegaciones_idDelegaciones`),
  CONSTRAINT `fk_Solicitudes_Instituciones10`
    FOREIGN KEY (`Instituciones_idInstituciones`)
    REFERENCES `solicitudes`.`Instituciones` (`idInstituciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Solicitantes10`
    FOREIGN KEY (`Solicitantes_idSolicitantes`)
    REFERENCES `solicitudes`.`Solicitantes` (`idSolicitantes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Distritos10`
    FOREIGN KEY (`Distritos_idDistritos`)
    REFERENCES `solicitudes`.`Distritos` (`idDistritos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Delegaciones0`
    FOREIGN KEY (`idDelegacion`)
    REFERENCES `solicitudes`.`Delegaciones` (`idDelegaciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Estados0`
    FOREIGN KEY (`idEstados`)
    REFERENCES `solicitudes`.`Estados` (`idEstados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitudes_Economicos0`
    FOREIGN KEY (`idEconomico`)
    REFERENCES `solicitudes`.`Economicos` (`idEconomicos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Solicitudes_Instituciones1_idx` ON `solicitudes`.`Solicitudes` (`Instituciones_idInstituciones` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Solicitantes1_idx` ON `solicitudes`.`Solicitudes` (`Solicitantes_idSolicitantes` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Distritos1_idx` ON `solicitudes`.`Solicitudes` (`Distritos_idDistritos` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Delegaciones1_idx` ON `solicitudes`.`Solicitudes` (`idDelegacion` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Estados1_idx` ON `solicitudes`.`Solicitudes` (`idEstados` ASC) VISIBLE;

CREATE INDEX `fk_Solicitudes_Economicos1_idx` ON `solicitudes`.`Solicitudes` (`idEconomico` ASC) VISIBLE;


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
