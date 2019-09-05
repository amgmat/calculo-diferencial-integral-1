import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BibliografiaComponent } from './components/bibliografia/bibliografia.component';
import { Guia1Component } from './components/guia1/guia1.component';
import { Guia2Component } from './components/guia2/guia2.component';
import { GuiasComponent } from './components/guias/guias.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    BibliografiaComponent,
    Guia1Component,
    Guia2Component,
    GuiasComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
