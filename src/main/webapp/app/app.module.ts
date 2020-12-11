import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { OcmSoliServerSharedModule } from 'app/shared/shared.module';
import { OcmSoliServerCoreModule } from 'app/core/core.module';
import { OcmSoliServerAppRoutingModule } from './app-routing.module';
import { OcmSoliServerHomeModule } from './home/home.module';
import { OcmSoliServerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    OcmSoliServerSharedModule,
    OcmSoliServerCoreModule,
    OcmSoliServerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    OcmSoliServerEntityModule,
    OcmSoliServerAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class OcmSoliServerAppModule {}
