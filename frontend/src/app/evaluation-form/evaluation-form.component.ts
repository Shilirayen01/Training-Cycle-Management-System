import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EvaluationService } from '../services/evaluation.service';
import { Evaluation } from '../models/evaluation';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent {
  isRatingVisible = true; // Contrôle la visibilité du formulaire
  evaluation: Partial<Evaluation> = {
    clariteDesObjectifs: '',
    pertinenceDesSupportsPedagogiques: '',
    competencesDuFormateur: '',
    reponseAuxAttentes: '',
    organisationGenerale: '',

  };

  criteres = [
    { label: 'Clarté des objectifs', name: 'clariteDesObjectifs' as const },
    { label: 'Pertinence des supports pédagogiques', name: 'pertinenceDesSupportsPedagogiques' as const },
    { label: 'Compétences du formateur', name: 'competencesDuFormateur' as const },
    { label: 'Réponse aux attentes', name: 'reponseAuxAttentes' as const },
    { label: 'Organisation générale', name: 'organisationGenerale' as const }
  ];

  constructor(private evaluationService: EvaluationService) {}

  // Ferme le formulaire
  closeRating() {
    this.isRatingVisible = false;
  }

  // Soumet le formulaire
  onRatingSubmit(ratingForm: NgForm) {
    if (ratingForm.valid) {
      console.log('Evaluation object before submission:', this.evaluation); // Debugging

      const newEvaluation: Evaluation = {
        clariteDesObjectifs: this.evaluation.clariteDesObjectifs || '',
        pertinenceDesSupportsPedagogiques: this.evaluation.pertinenceDesSupportsPedagogiques || '',
        competencesDuFormateur: this.evaluation.competencesDuFormateur || '',
        reponseAuxAttentes: this.evaluation.reponseAuxAttentes || '',
        organisationGenerale: this.evaluation.organisationGenerale || '',
          };

      console.log('New Evaluation object:', newEvaluation); // Debugging

      this.evaluationService.submitEvaluation(newEvaluation).subscribe(
        response => {
          console.log('Évaluation soumise avec succès', response);
          ratingForm.reset(); // Réinitialise le formulaire
          this.isRatingVisible = false; // Masque le formulaire après soumission
        },
        error => {
          console.error('Erreur lors de la soumission', error);
        }
      );
    } else {
      console.log('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
