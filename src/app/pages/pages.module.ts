import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    

  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  imports: [
    CommonModule,
    //importasion delos modules de shared
    SharedModule,
    //importacion de las rutas
    PAGES_ROUTES
  ]
})
export class PagesModule { }
