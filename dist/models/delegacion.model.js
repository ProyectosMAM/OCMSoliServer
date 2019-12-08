"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Delegacion {
    constructor(idDelegacion, descripcion, personaDelegada, observaciones, createdAt, updatedAt, idUserCreate, idUserUpdate) {
        this.idDelegacion = idDelegacion;
        this.descripcion = descripcion;
        this.personaDelegada = personaDelegada;
        this.observaciones = observaciones;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idUserCreate = idUserCreate;
        this.idUserUpdate = idUserUpdate;
        this.idDelegacion = idDelegacion ? idDelegacion : null;
        this.descripcion = descripcion ? descripcion : null;
        this.personaDelegada = personaDelegada ? personaDelegada : null;
        this.observaciones = observaciones ? observaciones : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}
exports.Delegacion = Delegacion;
// {
//   "Descripcion" : "cAMBIADA Esto es la descripcion",
//   "personaDelegada" : "ERARA OTRA",
//   "observaciones" : "Observaciones añadidas",
//   "idUserCreate" : 1,
//   "idUserUpdate" : 1
// }
//# sourceMappingURL=delegacion.model.js.map