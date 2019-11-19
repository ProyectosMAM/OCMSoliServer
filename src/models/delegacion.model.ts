export interface IDelegacion {
    idDelegacion?: number | null;
    descripcion?: string | null;
    observaciones?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
    idUserCreate?: number | null;
    idUserUpdate?: number | null;
}

export class Delegacion implements IDelegacion {
    constructor(
        public idDelegacion?: number | null,
        public descripcion?: string | null,
        public personaDelegada?: string | null,
        public observaciones?: string | null,
        public createdAt?: Date,
        public updatedAt?: Date,
        public idUserCreate?: number | null,
        public idUserUpdate?: number | null
    ) {
        this.idDelegacion = idDelegacion ? idDelegacion : null;
        this.descripcion = descripcion ? descripcion : null;
        this.personaDelegada = personaDelegada ? personaDelegada : null;
        this.observaciones = observaciones ? observaciones : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}


// {
//   "Descripcion" : "cAMBIADA Esto es la descripcion",
//   "personaDelegada" : "ERARA OTRA",
//   "observaciones" : "Observaciones añadidas",
//   "idUserCreate" : 1,
//   "idUserUpdate" : 1
// }