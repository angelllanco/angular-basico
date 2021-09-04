import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes : string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado : string='';

  /*
  constructor() { 

  }

  ngOnInit(): void {
  }*/

  borrarHeroe(){
    console.log("borrando...");
    this.heroeBorrado  = this.heroes.shift()||'';
    
    //this.heroes.splice(0,1);

  }
}
