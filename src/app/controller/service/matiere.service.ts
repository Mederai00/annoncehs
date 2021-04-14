import { Injectable } from '@angular/core';
import {AnnonceHS} from "../model/annonceHS.model";
import {HttpClient} from "@angular/common/http";
import {Matiere} from "../model/matiere.model";
import {Utilisateur} from "../model/utilisateur.model";
import {Vo} from "../model/vo.model";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private _matiere: Matiere;
  private _matieres: Array<Matiere>;
  private _annoncehs: AnnonceHS;
  private _myVo: Vo;
  _url = "http://localhost:8090/avito/matiere/";
  _urlAnnoncehs = "http://localhost:8090/avito/annoncehs/";
  private _alertOn = false;
  private _succesOn = false;


  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>(this._url, this.matiere).subscribe(
      data => {
        if (data > 0) {
          this.matieres.push(this.cloneMatiere(this.matiere));
          this.matiere = null;
          this.succesTimout();
        }
        if (data<0){
          this.alertTimout();
        }
      },
      eror => {
        this.alertTimout();
      }
    )
  }

  public update() {
    this.http.put<number>(this._url,this.matiere).subscribe(
      data => {
        if (data > 0) {
          this.matieres.push(this.cloneMatiere(this.matiere));
          this.matiere = null;
          this.succesTimout();
        }
      },
      eror => {
        this.alertTimout();
      }
    )
  }


  public alertTimout(){
    this.alertOn = true;
    setTimeout(() => {
      this.alertOn = false;
    }, 3500);
  }

  public succesTimout(){
    this.succesOn = true;
    setTimeout(() => {
      this.succesOn = false;
    }, 3500);
  }


  public addAnnonce() {
    this.matiere.annonceshs.push(this.cloneAnnoncehs(this.annoncehs));
    this.annoncehs = null;
  }

  get matieres(): Array<Matiere> {
    if(this._matieres == null) {
      this._matieres = new Array<Matiere>();
    }
    return this._matieres;
  }

  set matieres(value: Array<Matiere>) {
    this._matieres = value;
  }

  public findAll() {
    this.http.get<Array<Matiere>>(this._url, ).subscribe(
      data => {
        this.matieres = (data);
      },
      eror => {
        console.log("failed findAll");
      }
    )
  }

  public deleteByRef(matiere: Matiere) {
    this.http.delete<number>(this._url + "ref/" + matiere.ref).subscribe(
      data => {
        console.log( data + "were removed");
        this.deleteByRefFromView(matiere);
      }

    )
  }

  public deleteByRefFromView(matiere: Matiere){
    const index = this.matieres.findIndex(m => m.ref === matiere.ref);
    this.matieres.splice(index,1);
  }


  public deleteAnnoncehsByRef(annoncehs: AnnonceHS) {
    this.http.delete<number>(this._urlAnnoncehs + "ref/" + annoncehs.ref).subscribe(
      data => {
        console.log( data + "  :were removed: ");
        this.deleteAnnoncehsByRefFromView(annoncehs);
      }
    )
  }

  public deleteAnnoncehsByRefFromView(annoncehs: AnnonceHS){
    const index = this.matiere.annonceshs.findIndex(a => a.ref == annoncehs.ref);
    this.matiere.annonceshs.splice(index, 1);
  }


  public findAnnoncehsByMatiereRef(matiere: Matiere){
    this.http.get<Array<AnnonceHS>>(this._urlAnnoncehs + "matiere/ref/" + matiere.ref).subscribe(
      data => {
        this.matiere.annonceshs = data;
      }
    )
  }



  public editMatiere(matiere: Matiere) {
    this.http.get<Array<AnnonceHS>>(this._urlAnnoncehs + "matiere/ref/" + matiere.ref).subscribe(
      data => {
        this.matiere = matiere;
        this.matiere.annonceshs = data;
      }
    )
  }
    search(vo: Vo) {
    console.log(vo);
    this.http.post<Array<AnnonceHS>>(this._urlAnnoncehs + "criteria", this.myVo).subscribe(
      data => {
        this.matiere.annonceshs = data;
        this.myVo = null;
      }
    )
  }

  get myVo(): Vo {
    if (this._myVo == null){
      this._myVo = new Vo();
    }
    return this._myVo;
  }

  set myVo(value: Vo) {
    this._myVo = value;
  }

  get annoncehs(): AnnonceHS {
    if(this._annoncehs == null){
      this._annoncehs = new AnnonceHS();
    }
    return this._annoncehs;
  }

  set annoncehs(value: AnnonceHS) {
    this._annoncehs = value;
  }


  get matiere(): Matiere {
    if(this._matiere == null){
      this._matiere = new Matiere();
    }
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }


  get alertOn(): boolean {
    return this._alertOn;
  }

  set alertOn(value: boolean) {
    this._alertOn = value;
  }

  get succesOn(): boolean {
    return this._succesOn;
  }

  set succesOn(value: boolean) {
    this._succesOn = value;
  }

  private cloneAnnoncehs(annoncehs: AnnonceHS){
    const myClone = new AnnonceHS();
    myClone.ref = annoncehs.ref;
    myClone.titre = annoncehs.titre;
    myClone.description = annoncehs.description;
    myClone.jourDisponnibilite = annoncehs.jourDisponnibilite;
    myClone.montant = annoncehs.montant;
    myClone.utilisateur = annoncehs.utilisateur;
    return myClone;
  }

  private cloneMatiere(matiere: Matiere) {
    const myClone = new Matiere();
    myClone.ref = matiere.ref;
    myClone.libelle = matiere.libelle;
    return myClone;
  }

  public validateAdd(): boolean {
    return this.annoncehs.ref ==null || this.annoncehs.utilisateur.ref==null;
  }

  validateSave(): boolean {
    return this.matiere.ref == null || this.matiere.libelle == null || this.matiere.annonceshs.length == 0 ;
  }


  public reset() {
    this.matiere = null;
  }
}
