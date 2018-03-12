import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Acl-Demo-Aplicacion';
  lugares:any = [
  	{cercania:1,distancia: 1, active:true,  nombre: 'Santiago'},
  	{cercania:1,distancia: 1.8, active:false, nombre: 'San antonio'},
  	{cercania:1,distancia: 5, active:false, nombre: 'Temuco'},
  	{cercania:2,distancia: 10, active:false, nombre: 'Validivia'},
  	{cercania:2,distancia: 40, active:false, nombre: 'Talcahuano'},
  	{cercania:3,distancia: 54, active:false, nombre: 'Arica'},
  	{cercania:3,distancia: 120, active:false, nombre: 'Iquique'},

  ];


  constructor(){  	
  }
  
}

