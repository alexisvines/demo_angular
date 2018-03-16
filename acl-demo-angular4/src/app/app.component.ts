import { Component } from '@angular/core';
import {AutorizacionService} from "./services/autorizacion.services";



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Acl-Demo-Aplicacion';
	loggedIn = false;
	email = '';

	constructor(private autorizacionService:AutorizacionService){
		this.autorizacionService.isLogged()
		.subscribe((result)=>{
			if(result && result.uid){
				this.loggedIn = true;
				this.email = autorizacionService.getEmail();
			}else{
				this.loggedIn = false;
			}
		},(error)=>{
			this.loggedIn = false;
		})
	}

	logout(){
		this.autorizacionService.logout()
	}
}


