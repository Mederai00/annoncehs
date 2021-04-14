import { Component, OnInit } from '@angular/core';
import {MatiereService} from "../controller/service/matiere.service";

@Component({
  selector: 'app-list-and-create',
  templateUrl: './list-and-create.component.html',
  styleUrls: ['./list-and-create.component.css']
})
export class ListAndCreateComponent implements OnInit {

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
  }

  validateSave(): boolean {
    return this.matiereService.validateSave();
  }

  public save(){
    this.matiereService.save();
  }

  public update() {
    this.matiereService.update();
  }

  get alertOn(): boolean {
    return this.matiereService.alertOn;
  }

  get succesOn(): boolean {
    return this.matiereService.succesOn;
  }
  }
