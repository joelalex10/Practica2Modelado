import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadradoMedioComponent } from './components/cuadrado-medio/cuadrado-medio.component';
import { LinealComponent } from './components/lineal/lineal.component';
import { MultiplicativoComponent } from './components/multiplicativo/multiplicativo.component';
import { ProductoMedioComponent } from './components/producto-medio/producto-medio.component';

const routes: Routes = [
  {
    path: 'cuadrado-medio',
    component: CuadradoMedioComponent,
    pathMatch: 'full'
  },
  {
    path: 'producto-medio',
    component: ProductoMedioComponent,
  },
  {
    path: 'lineal',
    component: LinealComponent,
  },
  {
    path: 'multiplicativo',
    component: MultiplicativoComponent,
  },
  {
    path: '**',
    redirectTo:'cuadrado-medio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
