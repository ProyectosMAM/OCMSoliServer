"use strict";
// `idUserRol` INT NOT NULL AUTO_INCREMENT,
// `rol_idRol` INT NOT NULL,
// `user_idUser` INT NOT NULL,
// `createdAt` TIMESTAMP NULL,
// `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
// `idUserCreate` INT NULL,
// `idUserUpdate` INT NULL,
Object.defineProperty(exports, "__esModule", { value: true });
class UserRol {
    constructor(idUserRol, rol_idRol, user_idUser, createdAt, updatedAt, idUserCreate, idUserUpdate) {
        this.idUserRol = idUserRol;
        this.rol_idRol = rol_idRol;
        this.user_idUser = user_idUser;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idUserCreate = idUserCreate;
        this.idUserUpdate = idUserUpdate;
        this.idUserRol = idUserRol ? idUserRol : null;
        this.rol_idRol = rol_idRol ? rol_idRol : null;
        this.user_idUser = user_idUser ? user_idUser : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}
exports.UserRol = UserRol;
//# sourceMappingURL=userRol.model.js.map