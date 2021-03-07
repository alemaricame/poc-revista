import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/de_manteles_largos', title: 'De manteles largos',  icon: 'ni-calendar-grid-58', class: '' },
    { path: '/tu_historia_nuestra_historia', title: 'Tu historia nuestra historia',  icon: 'ni-book-bookmark', class: '' },
    { path: '/muro_del_desarrollo', title: 'Muro del desarrollo',  icon: 'ni-archive-2', class: '' },
    { path: '/eventos', title: 'Eventos',  icon: 'ni-badge', class: '' },
    { path: '/lo_que_tenemos_para_ti', title: 'Lo que tenemos para ti',  icon: 'ni-album-2', class: '' },
    // { path: '/salud', title: 'Salud',  icon: 'ni-ambulance text-primary', class: '' },

    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];


export const ROUTES_USER: RouteInfo[] = [
  { path: '/administradores', title: 'Administradores de la plataforma',  icon: 'ni-circle-08', class: '' },
  { path: '/usuarios', title: 'Usuarios de la plataforma',  icon: 'ni-single-02', class: '' },
  { path: '/cumples', title: 'Administrador de cumpleaños',  icon: 'ni-collection', class: '' },
  // { path: '/eventos', title: 'Eventos',  icon: 'ni-badge', class: '' },
  // { path: '/lo_que_tenemos_para_ti', title: 'Lo que tenemos para ti',  icon: 'ni-album-2', class: '' },
  // { path: '/salud', title: 'Salud',  icon: 'ni-ambulance', class: '' },

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;


  public menuItemsConfig: any[];
  public isCollapsed_Config = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

   this.menuItemsConfig = ROUTES_USER.filter(menuItem => menuItem);
   this.router.events.subscribe((event) => {
     this.isCollapsed_Config = true;
  });
  }
}
