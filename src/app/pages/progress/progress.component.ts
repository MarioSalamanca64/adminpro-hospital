import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: any = 30;
  progreso2: any = 20;
  constructor() {  }

  ngOnInit(): void {
  }



  // cambiarValor( valor:number ){
  //   //directiva si esmayor a 100 no ejecuta el codigo valor > 0 es para qeu salga del rango del 100 que si llega a 100
  //   //
  //   if(this.progreso >= 100 && valor > 0){
  //     this.progreso = 100
  //     return;
  //   }
  //   //directiva si es menur a 0 no ejecuta el codigo 
  //   if(this.progreso <= 0 && valor < 0){
  //     this.progreso = 0;
  //     return;
  //   }


  //   this.progreso = this.progreso + valor;
  // }

}
