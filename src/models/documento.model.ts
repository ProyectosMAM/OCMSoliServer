export interface IDocumento {
    idDocumento?: number | null;
    idSolicitudes?: number | null;
    Descripcion?: string | null;
    Observaciones?: string | null;
    Fecha?: Date | null;
    Ruta?: string | null;
    Fase?: string | null;
    Tipo?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
    idUserCreate?: number | null;
    idUserUpdate?: number | null;
}

export class Documento implements IDocumento {
    constructor(
        public idDocumento?: number | null,
        public idSolicitudes?: number | null,
        public Descripcion?: string | null,
        public Observaciones?: string | null,
        public Fecha?: Date | null,
        public Ruta?: string | null,
        public Fase?: string | null,
        public Tipo?: string | null,
        public createdAt?: Date,
        public updatedAt?: Date,
        public idUserCreate?: number | null,
        public idUserUpdate?: number | null
    ) {
        this.idDocumento = idDocumento ? idDocumento : null;
        this.idSolicitudes = idSolicitudes ? idSolicitudes : null;
        this.Descripcion = Descripcion ? Descripcion : null;
        this.Observaciones= Observaciones ? Observaciones : null;
        this.Fecha = Fecha ? Fecha : null;
        this.Ruta = Ruta ? Ruta : null;
        this.Fase = Tipo ? Tipo : null;
        this.Tipo = Tipo ? Tipo : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}



// {
//   "idSolicitudes" : 3,
//   "Descripcion" : "Pantallazo solicitud",
//   "observaciones" : "Observaciones añadidas",
//   "idUserCreate" : 1,
//   "idUserUpdate" : 1
// }