import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import {  filter, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription | undefined;

  constructor() {  

   this.subscription = this.regresaObservable()
   .subscribe( 
      numero => console.log('subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino!!!')
    );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
      this.subscription?.unsubscribe();
  }

  regresaObservable(){
    return new Observable<any>( observer => {

      let contador = 0;

      let intervalo  = setInterval (() => {

        contador += 1;

        let salida ={
          valor: contador
        }

        //nex vera la acumulacion de los datos
        observer.next( salida );

        // if( contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if( contador === 2){
          
        //   observer.error('auxilio!!!!!')
        // }

      },500 );
        
    }).pipe(
      retry(5), 
        map((resp:any) => {
        return resp.valor;
      }),
      filter((valor, index) => {
        if(valor % 2 === 1){
          //impar
          return true;
        }else{
          //par
          return false;
        }

        return true;
      }));
     
    
  }

}
