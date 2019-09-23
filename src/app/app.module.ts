import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderCompassoComponent } from './header-compasso/header-compasso.component';
import { MatToolbar, MatToolbarModule } from '@angular/material';
import { MiolocompassoComponent } from './miolocompasso/miolocompasso.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { Erro404Component } from './erro404/erro404.component';
import { LinhacompassoComponent } from './linhacompasso/linhacompasso.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { FichapokemonComponent } from './fichapokemon/fichapokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompassoComponent,
    MiolocompassoComponent,
    ContatoComponent,
    SobreComponent,
    Erro404Component,
    LinhacompassoComponent,
    FichapokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [ MatToolbar, ApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
