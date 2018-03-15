import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent} from './crear/crear.component';
import { HttpModule } from "@angular/http";
import { LinkifystrPipe } from "./pipes/linkfystrjs.pipe";
import { LoginComponent } from './login/login.component';
import { RegistroComponent} from './registro/registro.component';
import { AutorizacionService} from './services/autorizacion.services';
import { LugaresService } from './services/lugares.services';


const appRoutes: Routes = [
	{path:'', component:LugaresComponent},
	{path:'lugares', component:LugaresComponent},
	{path:'detalle/:id', component:DetalleComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'crear/:id', component:CrearComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent}
]

export const firebaseConfig = {
    apiKey: "AIzaSyAQaMhxQo_7-tMeALuIzzosQNzT7IlFJu4",
    authDomain: "acl-company-1520621112390.firebaseapp.com",
    databaseURL: "https://acl-company-1520621112390.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "314243085350"
};


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqVGfohzPaJaGMGrOSPCR9eAASVQVNFN4'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService, AutorizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
