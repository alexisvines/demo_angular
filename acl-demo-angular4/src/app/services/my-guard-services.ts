import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import {AutorizacionService} from "./autorizacion.services";

@Injectable()
export class MyGuard implements CanActivate{
	loggedIn = false;

	constructor(private autorizacionSevice:AutorizacionService){
		this.autorizacionSevice.isLogged()
			.subscribe((result)=>{
				if(result && result.uid){
					this.loggedIn = true;
				}else{
					this.loggedIn = false;
				}
			},(error)=>{
					this.loggedIn = false;
				
			})
	}

	canActivate(){
		return this.loggedIn;
	}
}