import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
//  {path: '' , 
//  component: PagesComponent,
//  //rutas hija para que funcione el segundo router-outlet
//  children: [
//     {path: 'dashboard' , component: DashboardComponent},
//     {path: 'progress' , component: ProgressComponent},
//     {path: 'graficas1' , component: Graficas1Component}, 
//     {path: '' , redirectTo: '/dashboard',pathMatch: 'full'},
//  ]
// },
 //estas rutas son como independientes y cambiar toda la pagina completa rutas padres
 {path: 'login' , component: LoginComponent},
 {path: 'register' , component: RegisterComponent},
 {path: '**' , component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});