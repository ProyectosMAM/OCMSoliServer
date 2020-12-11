import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OcmSoliServerSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [OcmSoliServerSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class OcmSoliServerHomeModule {}
