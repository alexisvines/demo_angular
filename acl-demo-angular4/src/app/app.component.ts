import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Acl-Demo-Aplicacion';
  lugares:any = [
  	{plan:'pagado', cercania:1,distancia: 1, active:true,  nombre: 'Santiago'},
  	{plan:'gratuito', cercania:1,distancia: 1.8, active:false, nombre: 'San antonio'},
  	{plan:'pagado', cercania:1,distancia: 5, active:false, nombre: 'Temuco'},
  	{plan:'gratuito', cercania:2,distancia: 10, active:false, nombre: 'Validivia'},
  	{plan:'gratuito', cercania:2,distancia: 40, active:false, nombre: 'Talcahuano'},
  	{plan:'gratuito', cercania:3,distancia: 54, active:false, nombre: 'Arica'},
  	{plan:'gratuito', cercania:3,distancia: 120, active:false, nombre: 'Iquique'},

  ];


  constructor(){  	
  }
  
}

