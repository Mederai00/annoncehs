import { Component, OnInit } from '@angular/core';
import {MatiereService} from "../controller/service/matiere.service";
import {AnnonceHS} from "../controller/model/annonceHS.model";
import {Utilisateur} from "../controller/model/utilisateur.model";
import {Matiere} from "../controller/model/matiere.model";

@Component({
  selector: 'app-create',
  templateUrl: './create-matiere.component.html',
  styleUrls: ['./create-matiere.component.css']
})
export class CreateMatiereComponent implements OnInit {

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
  }



  get annoncehs(): AnnonceHS {
    return this.matiereService.annoncehs;
  }

  set annoncehs(value: AnnonceHS) {
    this.matiereService.annoncehs = value;
  }

  public addAnnonce(){
    this.matiereService.addAnnonce();
  }

  get matiere(): Matiere {
    return this.matiereService.matiere;
  }

  set matiere(value: Matiere) {
    this.matiereService.matiere = value;
  }

  public validateAdd(): boolean {
    return this.matiereService.validateAdd();
  }


  public reset() {
    this.matiereService.reset();
  }

}
