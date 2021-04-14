import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMatiereComponent } from './create-matiere/create-matiere.component';
import { ListMatiere } from './list-matiere/list-matiere';
import {FormsModule} from "@angular/forms";
import { ListAnnoncehsComponent } from './list-annoncehs/list-annoncehs.component';
import { ListAndCreateComponent } from './list-and-create/list-and-create.component';
import {RouterModule, Routes} from "@angular/router";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchAndListComponent } from './search-and-list/search-and-list.component';

const appRoutes: Routes = [
  {path: '', component: ListAndCreateComponent},
  {path: 'listannoncehs', component: SearchAndListComponent},
  {path: 'listmatiere', component: ListMatiere}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateMatiereComponent,
    ListMatiere,
    ListAnnoncehsComponent,
    ListAndCreateComponent,
    SearchBarComponent,
    SearchAndListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
