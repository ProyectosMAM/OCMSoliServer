"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Documento {
    constructor(idDocumento, idSolicitudes, Descripcion, Observaciones, Fecha, Ruta, Fase, Tipo, createdAt, updatedAt, idUserCreate, idUserUpdate) {
        this.idDocumento = idDocumento;
        this.idSolicitudes = idSolicitudes;
        this.Descripcion = Descripcion;
        this.Observaciones = Observaciones;
        this.Fecha = Fecha;
        this.Ruta = Ruta;
        this.Fase = Fase;
        this.Tipo = Tipo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idUserCreate = idUserCreate;
        this.idUserUpdate = idUserUpdate;
        this.idDocumento = idDocumento ? idDocumento : null;
        this.idSolicitudes = idSolicitudes ? idSolicitudes : null;
        this.Descripcion = Descripcion ? Descripcion : null;
        this.Observaciones = Observaciones ? Observaciones : null;
        this.Fecha = Fecha ? Fecha : null;
        this.Ruta = Ruta ? Ruta : null;
        this.Fase = Tipo ? Tipo : null;
        this.Tipo = Tipo ? Tipo : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}
exports.Documento = Documento;
// {
//   "idSolicitudes" : 3,
//   "Descripcion" : "Pantallazo solicitud",
//   "observaciones" : "Observaciones añadidas",
//   "idUserCreate" : 1,
//   "idUserUpdate" : 1
// }
//# sourceMappingURL=documento.model.js.map