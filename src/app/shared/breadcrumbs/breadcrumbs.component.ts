import { Component, OnInit } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import {  ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  pagina: string = '';

  constructor( private router:Router,
                public title:Title,
                public meta: Meta) { 

   
      this.getDataRoute()
      .subscribe( data => {
      console.log(data);
      this.pagina = data.titulo;
      //con esto cambia el titulo de la pagina
      this.title.setTitle(this.pagina)
      
    })
  }

  getDataRoute(){
return this.router.events
       .pipe(
       filter((event: any) => event instanceof ActivationEnd),
       filter((event: ActivationEnd) => event.snapshot.firstChild === null),
       map( (event:ActivationEnd ) => event.snapshot.data ))
  }

  ngOnInit(): void {
  }

}
