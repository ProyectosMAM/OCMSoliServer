export interface ISolicitud {
    idSolicitudes?: number | null;
    FechaEntradaOCM?: Date;
    idSolicitantes?: number | null;
    idEstados?: number | null;
    idInstituciones?: number | null;
    idDocumentos?: number | null;
    idDistrito?: number | null;
    idDelegacion?: number | null;
    Distritos_idDistritos?: number | null;
    AprobadaOCM?: boolean;
    FechaAprobacionOCM?: Date;
    FechaPresentacion?: Date;
    FechaInicioExpediente?: Date;
    fecIniAyu?: Date;
    fecFinAyu?: Date;
    fecIniCon?: Date;
    fecFinCon?: Date;
    fecIniDef?: Date;
    fecFinDef?: Date;
    TextoCabecera?: string | null;
    TextoSolicitud?: string | null;
    SolicitudPrevia?: number | null;
    Observaciones?: string | null;
    Instituciones_idInstituciones?: number | null;
    Solicitantes_idSolicitantes?: number | null;
    Estados_idEstados?: number | null;
    FechaContestacion?: Date;
    Imagen?: string | null;
    SeguimientoSolicitante?: number | null;
    idPrograma?: number | null;
    idEconomico?: number | null;
    GradoRespuesta?: number | null;
    Delegaciones_idDelegaciones?: number | null;
    Estados_idEstados1?: number | null;
    createdAt?: Date;
    updatedAt?: Date;
    idUserCreate?: number | null;
    idUserUpdate?: number | null;
}

export class Solicitud implements ISolicitud {
    constructor(
       public idSolicitudes?: number | null,
       public FechaEntradaOCM?: Date,
       public idSolicitantes?: number | null,
       public idEstados?: number | null,
       public idInstituciones?: number | null,
       public idDocumentos?: number | null,
       public idDistrito?: number | null,
       public idDelegacion?: number | null,
       public Distritos_idDistritos?: number | null,
       public AprobadaOCM?: boolean,
       public FechaAprobacionOCM?: Date,
       public FechaPresentacion?: Date,
       public FechaInicioExpediente?: Date,
       public fecIniAyu?: Date,
       public fecFinAyu?: Date,
       public fecIniCon?: Date,
       public fecFinCon?: Date,
       public fecIniDef?: Date,
       public fecFinDef?: Date,
       public TextoCabecera?: string | null,
       public TextoSolicitud?: string | null,
       public SolicitudPrevia?: number | null,
       public Observaciones?: string | null,
       public Instituciones_idInstituciones?: number | null,
       public Solicitantes_idSolicitantes?: number | null,
       public Estados_idEstados?: number | null,
       public FechaContestacion?: Date,
       public Imagen?: string | null,
       public SeguimientoSolicitante?: number | null,
       public idPrograma?: number | null,
       public idEconomico?: number | null,
       public GradoRespuesta?: number | null,
       public Delegaciones_idDelegaciones?: number | null,
       public Estados_idEstados1?: number | null,
       public createdAt?: Date,
       public updatedAt?: Date,
       public idUserCreate?: number | null,
       public idUserUpdate?: number | null,
    ) {
        this.idSolicitudes = idSolicitudes ? idSolicitudes : null;
        this.FechaEntradaOCM = FechaEntradaOCM ? FechaEntradaOCM : null;
        this.idSolicitantes = idSolicitantes  ? idSolicitantes : null;
        this.idEstados = idEstados ? idEstados : null;
        this.idInstituciones = idInstituciones ? idInstituciones : null;
        this.idDocumentos = idDocumentos ? idDocumentos : null;
        this.idDistrito = idDistrito ? idDistrito : null;
        this.idDelegacion = idDelegacion ? idDelegacion : null;
        this.Distritos_idDistritos = Distritos_idDistritos ? Distritos_idDistritos : null;
        this.AprobadaOCM = AprobadaOCM ? AprobadaOCM : null;
        this.FechaAprobacionOCM = FechaAprobacionOCM ? FechaAprobacionOCM : null;
        this.FechaPresentacion = FechaPresentacion ? FechaPresentacion : null;
        this.FechaInicioExpediente = FechaInicioExpediente ? FechaInicioExpediente : null;
        this.TextoCabecera = TextoCabecera ? TextoCabecera : null;
        this.TextoSolicitud = TextoSolicitud ? TextoSolicitud : null;
        this.SolicitudPrevia = SolicitudPrevia ? SolicitudPrevia : null;
        this.Observaciones = Observaciones ? Observaciones : null;
        this.Instituciones_idInstituciones = Instituciones_idInstituciones ? Instituciones_idInstituciones : null;
        this.Solicitantes_idSolicitantes = Solicitantes_idSolicitantes  ? Solicitantes_idSolicitantes : null;
        this.Estados_idEstados = Estados_idEstados ? Estados_idEstados : null;
        this.FechaContestacion = FechaContestacion ? FechaContestacion : null;
        this.Imagen = Imagen ? Imagen : null;
        this.SeguimientoSolicitante = SeguimientoSolicitante ? SeguimientoSolicitante : null;
        this.idPrograma = idPrograma ? idPrograma : null;
        this.idEconomico = idEconomico ? idEconomico : null;
        this.GradoRespuesta = GradoRespuesta ? GradoRespuesta : null;
        this.Delegaciones_idDelegaciones = Delegaciones_idDelegaciones ? Delegaciones_idDelegaciones : null;
        this.Estados_idEstados1 = Estados_idEstados1 ? Estados_idEstados1 : null;
        this.createdAt = createdAt ? createdAt : null;
        this.updatedAt = updatedAt  ? updatedAt : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}


// {
//     "TextoCabecera" : "Tercera solicitud",
//   "observaciones" : "Observaciones tercera .",
//     "Distritos_idDistritos" : 1,
//     "Instituciones_idInstituciones" : 1,
//     "Solicitantes_idSolicitantes" : 1,
//     "Estados_idEstados" : 1,
//     "Delegaciones_idDelegaciones" : 1,
//     "Estados_idEstados1" : 1,
//   "idUserCreate" : 1,
//   "idUserUpdate" : 1
// }    