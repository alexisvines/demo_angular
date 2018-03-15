 import { Injectable} from "@angular/core";
import{ AngularFireAuth } from "angularfire2/auth/auth";

 @Injectable()
 export class AutorizacionService{

 	constructor(private angularFireAuth:AngularFireAuth){

 	}
 	
 	// Formato de declaracon de typescript
 	public login = (email, password) =>{
 		console.log('metodo de registro');
 		this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
 		.then((response)=>{
 			alert("Usuario registrado con exito");
 			console.log(response);
 		})
 		.catch((error)=>{
 			alert("Un error ha ocurrido");
 			console.log(error);
 		})
 	}	

 	public registro = (email, password) =>{
 		console.log('metodo de registro');
 		this.angularFireAuth.auth.createUserWithEmailAndPassword(email,pas)
 		.then((response)=>{
 			alert("Usuario registrado con exito");
 			console.log(response);
 		})
 		.catch((error)=>{
 			alert("Un error ha ocurrido");
 			console.log(error);
 		})
 	}
 }