import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Ajustes {
  temaUrl:string;
  tema:string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes:Ajustes = {
    temaUrl:'assets/css/colors/default.css',
    tema:'default'
  }


  constructor(@Inject(DOCUMENT) private _document:Document) { 
    this.cargarAjustes();
  }

  guardarAjustes(){
    //console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
  }
  
  cargarAjustes(){
    //getitem es m,anda los datos de gurdar ajustes
    if( localStorage.getItem('ajustes')){
      //aqui se hace el parse para q se conbierta  en un producto de js
      this.ajustes = JSON.parse( localStorage.getItem('ajustes')!)
      //console.log('cargando del localstorage');

      this.aplicarTema(this.ajustes.tema);

    }else{
      //console.log('Cargando valores por defecto');
    }
  }

  aplicarTema(tema:string){
    
    let url = `assets/css/colors/${tema}.css`
    //aqui estamos llamando al dom de html principal para poder cambiar el tema por el id tema
    this._document.getElementById('tema')?.setAttribute('href', url)

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }


}


