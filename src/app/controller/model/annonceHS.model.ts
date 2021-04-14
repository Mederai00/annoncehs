import {Utilisateur} from './utilisateur.model';
import {Matiere} from './matiere.model';

export class AnnonceHS {
  public ref: string;
  public utilisateur: Utilisateur = new Utilisateur();
  public titre: string;
  public description: string;
  public montant: number;
  public matiere: Matiere = new Matiere();
  public jourDisponnibilite: string;

}
