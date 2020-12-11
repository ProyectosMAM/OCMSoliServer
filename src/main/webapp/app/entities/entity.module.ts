import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'solicitud',
        loadChildren: () => import('./solicitud/solicitud.module').then(m => m.OcmSoliServerSolicitudModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class OcmSoliServerEntityModule {}
