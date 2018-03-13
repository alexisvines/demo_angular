import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})

export class LugaresComponent {
  lat = -33.423489;
  lng = -70.6106597;
  lugares:any = [
  	{id:1,plan:'pagado', cercania:1,distancia: 1, active:true,  nombre: 'Santiago'},
  	{id:2,plan:'gratuito', cercania:1,distancia: 1.8, active:true, nombre: 'San antonio'},
  	{id:3,plan:'pagado', cercania:1,distancia: 5, active:false, nombre: 'Temuco'},
  	{id:4,plan:'gratuito', cercania:2,distancia: 10, active:false, nombre: 'Validivia'},
  	{id:5,plan:'gratuito', cercania:2,distancia: 40, active:false, nombre: 'Talcahuano'},
  	{id:6,plan:'gratuito', cercania:3,distancia: 54, active:false, nombre: 'Arica'},
  	{id:7,plan:'gratuito', cercania:3,distancia: 120, active:false, nombre: 'Iquique'}
]
    constructor(){
     
}
}