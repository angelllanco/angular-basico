import { Component } from "@angular/core";
@Component(
    {
        selector:'app-Contador',
        template:`
{{titulo}}
<h3>Base:{{base}}</h3>
<button (click)="acumular(base)">+{{base}}</button>
{{numero}}
<button (click)="acumular(-base)">-{{base}}</button>        
        `
    }
)
export class ContadorComponent{

    public titulo: string = 'Contador App';
    public numero:number=10;
    public base:number=3;
  
    acumular(valor:number){
      this.numero+=valor;
    }
}