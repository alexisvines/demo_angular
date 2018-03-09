import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acl-Demo-Aplicacion';
  a = 3;
  b = 8;
  listo = false;


  constructor(){
  	setTimeout(()=>{
  		this.listo = true;
  	},3000);
  }
<<<<<<< HEAD

  //Funcion de prueba de event binding
  hacerAlgo(){
  	alert("Haciendo algo");
  }
=======
>>>>>>> 1079f0cc1e629de7926df79b74867a26ac3ab11f
}

