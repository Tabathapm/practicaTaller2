import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import {CarritoComponent} from "./componentes/carrito/carrito.component";

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Carrito', component: CarritoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
