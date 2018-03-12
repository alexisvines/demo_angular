import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqVGfohzPaJaGMGrOSPCR9eAASVQVNFN4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
