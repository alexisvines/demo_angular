import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Acl-Demo-Aplicacion';
  lugares:any = [
  	{active:true, nombre: 'Santiago'},
  	{active:false, nombre: 'San antonio'},
  	{active:true, nombre: 'Temuco'},
  	{active:true, nombre: 'Validivia'},
  	{active:true, nombre: 'Talcahuano'},
  	{active:true, nombre: 'Arica'},
  	{active:true, nombre: 'Iquique'},

  ];


  constructor(){  	
  }
  
}

