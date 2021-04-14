import { Component, OnInit } from '@angular/core';
import {MatiereService} from "../controller/service/matiere.service";
import {Vo} from "../controller/model/vo.model";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
  }
  get myVo(): Vo {
    return this.matiereService.myVo;
  }

  set myVo(value: Vo) {
    this.matiereService.myVo = value;
  }


  search(vo: Vo) {
    this.matiereService.search(vo);
  }



  }
