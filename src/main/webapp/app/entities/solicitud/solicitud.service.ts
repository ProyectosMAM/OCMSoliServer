import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISolicitud } from 'app/shared/model/solicitud.model';

type EntityResponseType = HttpResponse<ISolicitud>;
type EntityArrayResponseType = HttpResponse<ISolicitud[]>;

@Injectable({ providedIn: 'root' })
export class SolicitudService {
  public resourceUrl = SERVER_API_URL + 'api/solicituds';

  constructor(protected http: HttpClient) {}

  create(solicitud: ISolicitud): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(solicitud);
    return this.http
      .post<ISolicitud>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(solicitud: ISolicitud): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(solicitud);
    return this.http
      .put<ISolicitud>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ISolicitud>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISolicitud[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(solicitud: ISolicitud): ISolicitud {
    const copy: ISolicitud = Object.assign({}, solicitud, {
      fechaSolicitud:
        solicitud.fechaSolicitud && solicitud.fechaSolicitud.isValid() ? solicitud.fechaSolicitud.format(DATE_FORMAT) : undefined,
      fechaRespuesta:
        solicitud.fechaRespuesta && solicitud.fechaRespuesta.isValid() ? solicitud.fechaRespuesta.format(DATE_FORMAT) : undefined
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.fechaSolicitud = res.body.fechaSolicitud ? moment(res.body.fechaSolicitud) : undefined;
      res.body.fechaRespuesta = res.body.fechaRespuesta ? moment(res.body.fechaRespuesta) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((solicitud: ISolicitud) => {
        solicitud.fechaSolicitud = solicitud.fechaSolicitud ? moment(solicitud.fechaSolicitud) : undefined;
        solicitud.fechaRespuesta = solicitud.fechaRespuesta ? moment(solicitud.fechaRespuesta) : undefined;
      });
    }
    return res;
  }
}
