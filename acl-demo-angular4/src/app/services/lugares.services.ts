import {Injectable} from "@angular/core";

@Injectable()
export class LugaresService{
	
lugares:any = [
  	{id:1,plan:'pagado', cercania:1,distancia: 1, active:true,  nombre: 'Santiago',descripcion: 'descripcion de prueba para mostrar en la pantalla'},
  	{id:2,plan:'gratuito', cercania:1,distancia: 1.8, active:true, nombre: 'San antonio',descripcion: 'descripcion de prueba para mostrar en la pantalla'},
  	{id:3,plan:'pagado', cercania:1,distancia: 5, active:false, nombre: 'Temuco',descripcion: 'descripcion de prueba para mostrar en la pantalla'},
  	{id:4,plan:'gratuito', cercania:2,distancia: 10, active:false, nombre: 'Validivia',descripcion: 'descripcion de prueba para mostrar en la pantalla'},
  	{id:5,plan:'gratuito', cercania:2,distancia: 40, active:false, nombre: 'Talcahuano',descripcion: 'descripcion de prueba para mostrar en la pantalla'},
  	{id:6,plan:'gratuito', cercania:3,distancia: 54, active:false, nombre: 'Arica',descripcion: 'descripcion de prueba para mostrar en la pantalla'},
  	{id:7,plan:'gratuito', cercania:3,distancia: 120, active:false, nombre: 'Iquique',descripcion: 'descripcion de prueba para mostrar en la pantalla'}
];

public getLugares(){
	return this.lugares;
}

 public buscarLugar(id){
 	return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
 }


}