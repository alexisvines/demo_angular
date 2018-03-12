import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Acl-Demo-Aplicacion';
  areas:any = [
  	{active:true, nombre: 'Software Developer'},
  	{active:true, nombre: 'Outsourcing'},
  	{active:false, nombre: 'Project Management'},
  ];


  constructor(){  	
  }
  
}

