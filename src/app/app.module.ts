import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import {
  NgbPaginationModule,
  NgbModalModule
} from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticuloFamiliasComponent } from './components/articulo-familias/articulo-familias.component';
import { ArticulosComponent } from './components/articulos/articulos.component';

import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";
import { NombreArticulosPipe } from './pipes/nombre-articulos.pipe';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { MyInterceptor } from "./shared/my-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticuloFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
    NombreArticulosPipe,
    ModalDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticuloFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
    ]),
    NgbPaginationModule,
    NgbModalModule,
  ],
  entryComponents: [ModalDialogComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
