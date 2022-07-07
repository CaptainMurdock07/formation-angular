import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/menu/menu.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { HomeComponent } from './composants/home/home.component';
import { HeaderComponent } from './composants/header/header.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { GetCharPipe } from './pipes/get-char.pipe';
import { EvenVluePipe } from './pipes/even-vlue.pipe';
import { SubStrPipe } from './pipes/sub-str.pipe';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';
import { ProduitComponent } from './composants/produit/produit.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdresseComponent,
    StagiaireComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    TableauComponent,
    CalculComponent,
    GetCharPipe,
    EvenVluePipe,
    SubStrPipe,
    FormulaireComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
