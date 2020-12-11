import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ISolicitud, Solicitud } from 'app/shared/model/solicitud.model';
import { SolicitudService } from './solicitud.service';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudDetailComponent } from './solicitud-detail.component';
import { SolicitudUpdateComponent } from './solicitud-update.component';

@Injectable({ providedIn: 'root' })
export class SolicitudResolve implements Resolve<ISolicitud> {
  constructor(private service: SolicitudService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISolicitud> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((solicitud: HttpResponse<Solicitud>) => {
          if (solicitud.body) {
            return of(solicitud.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Solicitud());
  }
}

export const solicitudRoute: Routes = [
  {
    path: '',
    component: SolicitudComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'ocmSoliServerApp.solicitud.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: SolicitudDetailComponent,
    resolve: {
      solicitud: SolicitudResolve
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'ocmSoliServerApp.solicitud.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: SolicitudUpdateComponent,
    resolve: {
      solicitud: SolicitudResolve
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'ocmSoliServerApp.solicitud.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: SolicitudUpdateComponent,
    resolve: {
      solicitud: SolicitudResolve
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'ocmSoliServerApp.solicitud.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
