"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rol {
    constructor(idRol, descripcion, observaciones, createdAt, updatedAt, idUserCreate, idUserUpdate) {
        this.idRol = idRol;
        this.descripcion = descripcion;
        this.observaciones = observaciones;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idUserCreate = idUserCreate;
        this.idUserUpdate = idUserUpdate;
        this.idRol = idRol ? idRol : null;
        this.descripcion = descripcion ? descripcion : null;
        this.observaciones = observaciones ? observaciones : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}
exports.Rol = Rol;
//# sourceMappingURL=rol.model.js.map