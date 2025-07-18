import { Cycle } from './../cycle.service';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css']
})
export class FormationCardComponent {
  @Input() formation: any; // Les données de la formation
  isFormVisible = false; // Contrôle l'affichage du formulaire
  hasRegistered = false; // Indique si l'utilisateur s'est inscrit
  isRatingVisible = false; // Contrôle l'affichage de la section de notation
  isSuccessVisible = false;

  constructor(private inscriptionService: InscriptionService){}

  // Afficher ou masquer le formulaire d'inscription
  showForm() {
    this.isFormVisible = !this.isFormVisible;
  }


   selectedParticipant: Participant = {
    nomPrenom: '',
    nomPrenomArabe: '',
    numCin: '',
    directionService: '',
    entreprise: '',
    engagement: '',
    };

  // Gérer la soumission du formulaire d'inscription
  onSubmit(form: NgForm , id: number) {
    if (form.valid) {
      if (!id) {
        console.error('ID de la formation est manquant');
        return;
      }
      console.log('Formulaire soumis avec succès:', form.value);

      this.selectedParticipant.nomPrenom = form.value.nom + ' ' + form.value.prenom;
      this.selectedParticipant.nomPrenomArabe = form.value.nom_ar + ' ' + form.value.prenom_ar;
      this.selectedParticipant.numCin = form.value.cin;
      this.selectedParticipant.entreprise = form.value.entreprise;
      this.selectedParticipant.engagement = form.value.gouvernorat;

      // Une fois inscrit, active l'affichage du bouton "Noter"
      this.hasRegistered = true;

      // Réinitialisez le formulaire et fermez le formulaire
      form.reset();
      this.isFormVisible = false;

      console.log(this.formation.id)
      //particpant
      this.inscriptionService.addParticipant(this.selectedParticipant, this.formation.id).subscribe(
        (response) => {}
      )

    } else {
      console.log('Veuillez remplir tous les champs obligatoires.');
    }


  }

  // Gérer l'affichage de la section de notation
  rateFormation() {
    this.isRatingVisible = true;
  }

  // Fermer la section de notation
  closeRating() {
    this.isRatingVisible = false;
  }


   // Annuler l'inscription
   cancelRegistration() {
    this.isFormVisible = false;
  }

  // Fermer le message de succès
  closeSuccessMessage() {
    this.isSuccessVisible = false;
  }
}

export interface Participant {
  nomPrenom: string;
  nomPrenomArabe: string;
  numCin: string;
  directionService: string;
  entreprise: string;
  engagement: string;
}


