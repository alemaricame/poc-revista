import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeMantelesLargosComponent } from 'src/app/pages/de-manteles-largos/de-manteles-largos.component';
import { TuHistoriaNuestraHistoriaComponent } from 'src/app/pages/tu-historia-nuestra-historia/tu-historia-nuestra-historia.component';
import { EventosComponent } from 'src/app/pages/eventos/eventos.component';
import { LoQueTenemosParaTiComponent } from 'src/app/pages/lo-que-tenemos-para-ti/lo-que-tenemos-para-ti.component';
import { SaludComponent } from 'src/app/pages/salud/salud.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    DeMantelesLargosComponent,
    TuHistoriaNuestraHistoriaComponent,
    EventosComponent,
    LoQueTenemosParaTiComponent,
    SaludComponent
  ]
})

export class AdminLayoutModule {}
