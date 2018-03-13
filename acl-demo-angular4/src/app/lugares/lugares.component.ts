import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.services';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})

export class LugaresComponent {
  lat = -33.423489;
  lng = -70.6106597;
  lugares = null;

    constructor(private lugaresService: LugaresService){
       lugaresService.getLugares()
       			.valueChanges()
       			.subscribe(lugares=>{
       				debugger;
       				this.lugares = lugares;
       			});

  }

}