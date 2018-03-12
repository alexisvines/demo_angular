import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Acl-Demo-Aplicacion';
  areas:any = [
  	{nombre: 'Software Developer'},
  	{nombre: 'Outsourcing'},
  	{nombre: 'Project Management'},
  ];


  constructor(){  	
  }
  
}

