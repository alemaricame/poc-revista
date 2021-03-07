import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { DeMantelesLargosComponent } from 'src/app/pages/de-manteles-largos/de-manteles-largos.component';
import { TuHistoriaNuestraHistoriaComponent } from 'src/app/pages/tu-historia-nuestra-historia/tu-historia-nuestra-historia.component';
import { MuroDelDesarrolloComponent } from 'src/app/pages/muro-del-desarrollo/muro-del-desarrollo.component';
import { EventosComponent } from 'src/app/pages/eventos/eventos.component';
import { LoQueTenemosParaTiComponent } from 'src/app/pages/lo-que-tenemos-para-ti/lo-que-tenemos-para-ti.component';
import { SaludComponent } from 'src/app/pages/salud/salud.component';
import { UsuariosComponent } from 'src/app/pages/usuarios/usuarios.component';
import { InformacionQueCuraComponent } from 'src/app/pages/informacion-que-cura/informacion-que-cura.component';
import { SaludMesComponent } from 'src/app/pages/salud-mes/salud-mes.component';
import { ParaQueTeAnimesComponent } from 'src/app/pages/para-que-te-animes/para-que-te-animes.component';
import { ConveniosComponent } from 'src/app/pages/convenios/convenios.component';
import { InfografiaComponent } from 'src/app/pages/infografia/infografia.component';
import { LineaCovidComponent } from 'src/app/pages/linea-covid/linea-covid.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'de_manteles_largos',      component: DeMantelesLargosComponent },
    { path: 'tu_historia_nuestra_historia',      component: TuHistoriaNuestraHistoriaComponent },
    { path: 'muro_del_desarrollo',      component: MuroDelDesarrolloComponent },
    { path: 'eventos',      component: EventosComponent },
    { path: 'lo_que_tenemos_para_ti',      component: LoQueTenemosParaTiComponent },
    { path: 'salud',      component: SaludComponent },
    { path: 'informacion_que_cura',      component: InformacionQueCuraComponent },
    { path: 'salud_mes',      component: SaludMesComponent },
    { path: 'para_que_te_animes',      component: ParaQueTeAnimesComponent },
    { path: 'convenios',      component: ConveniosComponent },
    { path: 'infografia',      component: InfografiaComponent },
    { path: 'linea_covid',      component: LineaCovidComponent },


    { path: 'usuarios',      component: UsuariosComponent },

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
