
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';




@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styles: [
  ]
})
export class AccoutSettingComponent implements OnInit {
  //aqui estamos llamando al dom de html principal para poder cambiar el tema
  constructor(  
                public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    //almomento de cargar la pagina se diparara el check
    this.colocarCheck();
  }

  cambiarColor( tema: string, link:any){
    
    //hcaer la referencia a plicarcheck
    this.aplciarCheck(link);

    this._ajustes.aplicarTema( tema);

    
  }
  //para poner la palomita 
  aplciarCheck( link:any){

    let selectores:any = document.getElementsByClassName('selector')

    for(let ref of selectores ){

      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector')

    let tema = this._ajustes.ajustes.tema;

    for(let ref of selectores ){
      //formas de manejar una referencia en html o en cuanquier codigo 
      if(ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
        break;
      }

    }
  }

}
