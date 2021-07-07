import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  //espara el segundo elemento
  //espara el segundo elemento
  @ViewChild('txtProgress', { read: ElementRef })
  txtProgress!: ElementRef;

  // para que resiva informacion de afuera 
  @Input('nombre') leyenda: string = 'Leyenda';

  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<Number> = new EventEmitter

  constructor() { 
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }
  
  ngOnInit(): void {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  onChanges( newValue:number ){ 
    //espara que almomento de poner numeros en el input no pase de los 100 y no se imprima
    //let elemHTML :any = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);

    //console.log(elemHTML.value);

    //console.log( newValue );
    //logica para las directivas
    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 0 ){
      this.progreso = 0; 
    }else{
      this.progreso = newValue
    }

    //elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;



    //amite los cambios en el input para que acepte los cambios antes solo aseptaba por el button
    this.cambioValor.emit(this.progreso);
  }

  
     cambiarValor( valor:number ){
    //directiva si esmayor a 100 no ejecuta el codigo valor > 0 es para qeu salga del rango del 100 que si llega a 100
    
    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100
      return;
    }
    //directiva si es menur a 0 no ejecuta el codigo 
    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
   
    }
    this.progreso = this.progreso + valor;
    //aqui se pondria la salida output ya que termina lo que queremos 
    //emitimos un numero para cambiar el progreso 
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
function txtProgress(txtProgress: any) {
  throw new Error('Function not implemented.');
}

