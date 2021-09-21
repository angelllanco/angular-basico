import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

   personajes: Personaje [] =[
     {
      nombre : 'Goku',
      poder  : 14500
     },
     {
      nombre: 'Vegueta',
      poder : 8300
     }
  ];

  nuevo: Personaje ={
    nombre:'',
    poder:0
  }
  agregar(){
    if(this.nuevo.nombre.trim().length=== 0 ){return}
    console.log(this.nuevo)
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0  
    }
  }
  
}
 



