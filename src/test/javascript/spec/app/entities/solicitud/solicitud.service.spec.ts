import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SolicitudService } from 'app/entities/solicitud/solicitud.service';
import { ISolicitud, Solicitud } from 'app/shared/model/solicitud.model';

describe('Service Tests', () => {
  describe('Solicitud Service', () => {
    let injector: TestBed;
    let service: SolicitudService;
    let httpMock: HttpTestingController;
    let elemDefault: ISolicitud;
    let expectedResult: ISolicitud | ISolicitud[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(SolicitudService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Solicitud(0, 'AAAAAAA', currentDate, currentDate, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            fechaSolicitud: currentDate.format(DATE_FORMAT),
            fechaRespuesta: currentDate.format(DATE_FORMAT)
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Solicitud', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            fechaSolicitud: currentDate.format(DATE_FORMAT),
            fechaRespuesta: currentDate.format(DATE_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            fechaSolicitud: currentDate,
            fechaRespuesta: currentDate
          },
          returnedFromService
        );

        service.create(new Solicitud()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Solicitud', () => {
        const returnedFromService = Object.assign(
          {
            descripcion: 'BBBBBB',
            fechaSolicitud: currentDate.format(DATE_FORMAT),
            fechaRespuesta: currentDate.format(DATE_FORMAT),
            observacion: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            fechaSolicitud: currentDate,
            fechaRespuesta: currentDate
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Solicitud', () => {
        const returnedFromService = Object.assign(
          {
            descripcion: 'BBBBBB',
            fechaSolicitud: currentDate.format(DATE_FORMAT),
            fechaRespuesta: currentDate.format(DATE_FORMAT),
            observacion: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            fechaSolicitud: currentDate,
            fechaRespuesta: currentDate
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Solicitud', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
