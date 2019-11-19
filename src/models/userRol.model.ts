// `idUserRol` INT NOT NULL AUTO_INCREMENT,
// `rol_idRol` INT NOT NULL,
// `user_idUser` INT NOT NULL,
// `createdAt` TIMESTAMP NULL,
// `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
// `idUserCreate` INT NULL,
// `idUserUpdate` INT NULL,

export interface IUserRol {
    idUserRol?: number | null;
    rol_idRol?: number | null;
    user_idUser?: number | null;
    createdAt?: Date;
    updatedAt?: Date;
    idUserCreate?: number | null;
    idUserUpdate?: number | null;
}

export class UserRol implements IUserRol {
    constructor(
        public idUserRol?: number | null,
        public rol_idRol?: number | null,
        public user_idUser?: number | null,
        public createdAt?: Date,
        public updatedAt?: Date,
        public idUserCreate?: number | null,
        public idUserUpdate?: number | null
    ) {
        this.idUserRol = idUserRol ? idUserRol : null;
        this.rol_idRol = rol_idRol ? rol_idRol : null;
        this.user_idUser = user_idUser ? user_idUser : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}
