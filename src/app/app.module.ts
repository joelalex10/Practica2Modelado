import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';


import { NavbarComponent } from './components/navbar/navbar.component';
import { CuadradoMedioComponent } from './components/cuadrado-medio/cuadrado-medio.component';
import { ProductoMedioComponent } from './components/producto-medio/producto-medio.component';
import { LinealComponent } from './components/lineal/lineal.component';
import { MultiplicativoComponent } from './components/multiplicativo/multiplicativo.component';
import { FormDatosComponent } from './components/lineal/form-datos/form-datos.component';
import { ListaDatosComponent } from './components/lineal/lista-datos/lista-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuadradoMedioComponent,
    ProductoMedioComponent,
    LinealComponent,
    MultiplicativoComponent,
    FormDatosComponent,
    ListaDatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
