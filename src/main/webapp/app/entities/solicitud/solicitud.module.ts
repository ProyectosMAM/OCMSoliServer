import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OcmSoliServerSharedModule } from 'app/shared/shared.module';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudDetailComponent } from './solicitud-detail.component';
import { SolicitudUpdateComponent } from './solicitud-update.component';
import { SolicitudDeleteDialogComponent } from './solicitud-delete-dialog.component';
import { solicitudRoute } from './solicitud.route';

@NgModule({
  imports: [OcmSoliServerSharedModule, RouterModule.forChild(solicitudRoute)],
  declarations: [SolicitudComponent, SolicitudDetailComponent, SolicitudUpdateComponent, SolicitudDeleteDialogComponent],
  entryComponents: [SolicitudDeleteDialogComponent]
})
export class OcmSoliServerSolicitudModule {}
