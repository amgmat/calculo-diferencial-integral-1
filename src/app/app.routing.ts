import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BibliografiaComponent } from './components/bibliografia/bibliografia.component';
import { Guia1Component } from './components/guia1/guia1.component';
import { Guia2Component } from './components/guia2/guia2.component';
import {GuiasComponent} from './components/guias/guias.component';


const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'bibliografia', component: BibliografiaComponent},
    {path: 'guias', component: GuiasComponent},
    {path: 'guia-1', component: Guia1Component},
    {path: 'guia-2', component: Guia2Component}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)