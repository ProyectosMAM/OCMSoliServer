export interface IRol {
    idRol?: number | null;
    descripcion?: string | null;
    observaciones?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
    idUserCreate?: number | null;
    idUserUpdate?: number | null;
}

export class Rol implements IRol {
    constructor(
        public idRol?: number | null,
        public descripcion?: string | null,
        public observaciones?: string | null,
        public createdAt?: Date,
        public updatedAt?: Date,
        public idUserCreate?: number | null,
        public idUserUpdate?: number | null
    ) {
        this.idRol = idRol ? idRol : null;
        this.descripcion = descripcion ? descripcion : null;
        this.observaciones = observaciones ? observaciones : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}
