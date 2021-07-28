import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes:Routes = [
    {path: '' , 
      component: PagesComponent,
      //rutas hija para que funcione el segundo router-outlet
      children: [
         { path: 'dashboard' , component: DashboardComponent , data:{ titulo:'dashboard' }},
         {path: 'progress' , component: ProgressComponent, data:{ titulo:'progressBars' }},
         {path: 'graficas1' , component: Graficas1Component, data:{ titulo:'Graficas' }},
         {path: 'promesas' , component: PromesasComponent, data:{ titulo:'Promesa' }},
         {path: 'rxjs' , component: RxjsComponent, data:{ titulo:'RxJs' }},
         {path: 'account-settings' , component: AccoutSettingComponent, data:{ titulo:'Ajustes de Tema' }}, 
         {path: '' , redirectTo: '/dashboard',pathMatch: 'full'},
      ]
     },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);