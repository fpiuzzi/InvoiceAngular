import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { FactureComponent } from './facture/facture.component';
import { Factures2Component } from './factures2/factures2.component';
import { AddFactureComponent } from './facture/add-facture/add-facture.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    FactureComponent,
    Factures2Component,
    AddFactureComponent,
    ListFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
