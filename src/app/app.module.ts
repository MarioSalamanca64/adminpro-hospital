import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';

//Servicios
import { ServiceModule } from './services/service.module';


//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//tEMPORAL
import { FormsModule } from '@angular/forms';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    
    // NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    //importacion de los modelos pages y de ahi sige shared
    PagesModule,
    FormsModule,
    ServiceModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
