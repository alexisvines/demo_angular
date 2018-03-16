import { Injectable} from "@angular/core";
import{ AngularFireAuth } from "angularfire2/auth/auth";
import { Router } from "@angular/router";

 @Injectable()
 export class AutorizacionService{

 	constructor(private angularFireAuth:AngularFireAuth, private router: Router){
 		this.isLogged();
 	}
 	
 	// Formato de declaracon de typescript
 	public login = (email, password) =>{
 		console.log('metodo de registro');
 		this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
 		.then((response)=>{
 			alert("Usuario registrado con exito");
 			console.log(response);
 		 this.router.navigate(['lugares'])
 		})
 		.catch((error)=>{
 			alert("Un error ha ocurrido");
 			console.log(error);
 		})
 	}	

 	public registro = (email, password) =>{
 		console.log('metodo de registro');
 		this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
 		.then((response)=>{
 			alert("Usuario registrado con exito");
 			console.log(response);
 			this.router.navigate(['lugares']);
 		})
 		.catch((error)=>{
 			alert("Un error ha ocurrido");
 			console.log(error);
 		})
 	}
 	public isLogged(){
 		return this.angularFireAuth.authState;
 	}

 	public logout(){
 		this.angularFireAuth.auth.signOut();
 		alert("session cerrada");
 		this.router.navigate(["/login"]);
 	}

 	public getEmail(){
 		return this.angularFireAuth.auth.currentUser.email;
 	}
 }