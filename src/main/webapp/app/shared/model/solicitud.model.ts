import { Moment } from 'moment';

export interface ISolicitud {
  id?: number;
  descripcion?: string;
  fechaSolicitud?: Moment;
  fechaRespuesta?: Moment;
}

export class Solicitud implements ISolicitud {
  constructor(public id?: number, public descripcion?: string, public fechaSolicitud?: Moment, public fechaRespuesta?: Moment) {}
}
