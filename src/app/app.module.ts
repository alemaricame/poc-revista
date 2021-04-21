import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InformacionQueCuraComponent } from './pages/informacion-que-cura/informacion-que-cura.component';
import { SaludMesComponent } from './pages/salud-mes/salud-mes.component';
import { ParaQueTeAnimesComponent } from './pages/para-que-te-animes/para-que-te-animes.component';
import { ConveniosComponent } from './pages/convenios/convenios.component';
import { InfografiaComponent } from './pages/infografia/infografia.component';
import { AquiEstamosComponent } from './pages/aqui-estamos/aqui-estamos.component';
import { LineaCovidComponent } from './pages/linea-covid/linea-covid.component';
import { LosDeCajonComponent } from './pages/los-de-cajon/los-de-cajon.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UsuariosComponent,
    InformacionQueCuraComponent,
    SaludMesComponent,
    ParaQueTeAnimesComponent,
    ConveniosComponent,
    InfografiaComponent,
    AquiEstamosComponent,
    LineaCovidComponent,
    LosDeCajonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
