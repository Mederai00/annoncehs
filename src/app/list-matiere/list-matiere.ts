import {Component, Input, OnInit} from '@angular/core';
import {AnnonceHS} from "../controller/model/annonceHS.model";
import {MatiereService} from "../controller/service/matiere.service";
import {Matiere} from "../controller/model/matiere.model";

@Component({
  selector: 'app-list',
  templateUrl: './list-matiere.html',
  styleUrls: ['./list-matiere.css']
})
export class ListMatiere implements OnInit {

  constructor(private matiereService: MatiereService) {}

  ngOnInit(): void {
    this.findAll();
  }
  public findAll() {
    this.matiereService.findAll();
  }

  public deleteByRef(matiere: Matiere){
    this.matiereService.deleteByRef(matiere);
  }

  public findAnnoncehsByMatiereRef(matiere: Matiere){
    this.matiereService.findAnnoncehsByMatiereRef(matiere);
  }

   public editMatiere(matiere: Matiere){
     this.matiereService.editMatiere(matiere);
   }

  get annoncehs(): AnnonceHS {
    return this.matiereService.annoncehs;
  }

  set annoncehs(value: AnnonceHS) {
    this.matiereService.annoncehs = value;
  }
  get matieres(): Array<Matiere> {
    return this.matiereService.matieres;
  }

  set matieres(value: Array<Matiere>) {
    this.matiereService.matieres = value;
  }

}
