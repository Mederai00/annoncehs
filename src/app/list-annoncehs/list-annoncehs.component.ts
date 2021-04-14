import { Component, OnInit } from '@angular/core';
import {MatiereService} from "../controller/service/matiere.service";
import {Matiere} from "../controller/model/matiere.model";
import {AnnonceHS} from "../controller/model/annonceHS.model";
import {Vo} from "../controller/model/vo.model";

@Component({
  selector: 'app-list-annoncehs',
  templateUrl: './list-annoncehs.component.html',
  styleUrls: ['./list-annoncehs.component.css']
})
export class ListAnnoncehsComponent implements OnInit {

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
  }

  get matiere(): Matiere {
    return this.matiereService.matiere;
  }

  public deleteAnnoncehsByRef(annoncehs: AnnonceHS){
    this.matiereService.deleteAnnoncehsByRef(annoncehs)
  }


}
