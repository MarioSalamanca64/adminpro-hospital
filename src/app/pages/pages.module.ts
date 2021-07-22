import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
//modulos
import { PagesComponent } from './pages.component';


import { SharedModule } from '../shared/shared.module';
//rutas
import { PAGES_ROUTES } from './pages.routes';
//temporal
import { FormsModule } from '@angular/forms';
//funcion

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
//ng2-charts graficas 
import { ChartsModule } from 'ng2-charts';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';




@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccoutSettingComponent
    

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
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
    
  ]
})
export class PagesModule { }
