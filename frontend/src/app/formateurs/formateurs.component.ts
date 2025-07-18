import { Component, OnInit } from '@angular/core';
import { FormateurService, formateur, Cycle } from '../services/formateur.service';
import { CycleService } from "../cycle.service";


@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css'],
})
export class FormateursComponent implements OnInit {
  formateurs: formateur[] = [];
  cycles: any[] = []; // Store available cycles
  showForm = false;
  showDetails = false;

  selectedFormateur: formateur = {
    id: 0,
    nom: '',
    prenom: '',
    direction: '',
    cycle: {id: 0}, // Initialize cycle as an object with id property
  };


  constructor(private formateurService: FormateurService,    private cycleService: CycleService
  ) {}

  ngOnInit(): void {
    this.loadFormateurs();
    this.loadCycles();
    console.log(this.loadCycles())
  }




  loadCycles() {
    this.cycleService.getAllCycles().subscribe((data) => {
      console.log('Cycles:', data); // Debug log

      this.cycles = data;
    });
  }

  loadFormateurs() {
    this.formateurService.getAllFormateurs().subscribe((data) => {
      this.formateurs = data;
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetSelectedFormateur();
  }

  addOrEditFormateur() {
    console.log('Formateur to Save:', this.selectedFormateur);


    if (this.selectedFormateur.id === 0) {
      let data =   {
        nom:this.selectedFormateur.nom,
        prenom:this.selectedFormateur.prenom,
        direction:this.selectedFormateur.direction,
        cycle:{id:this.selectedFormateur.cycle.id}
      }
      // Add new formateur
      this.formateurService.addformateur(data).subscribe(
        (newFormateur) => {
          console.log('Formateur added successfully:', newFormateur);
          this.loadFormateurs();
          this.showForm = false;
        },
        (error) => console.error('Error adding formateur:', error)
      );

      this.resetSelectedFormateur();
    }else{
      let data =   {
        id:this.selectedFormateur.id,
        nom:this.selectedFormateur.nom,
        prenom:this.selectedFormateur.prenom,
        direction:this.selectedFormateur.direction,
        cycle:{id:this.selectedFormateur.cycle.id}
      }

      // Edit formateur
      this.formateurService.editformateur(data).subscribe(
        (editedFormateur) => {
          console.log('Formateur Edited successfully:', editedFormateur);
          this.loadFormateurs();
          this.showForm = false;
        },
        (error) => console.error('Error editing formateur:', error)
      );
      this.resetSelectedFormateur();
    }
  }



  viewFormateur(formateur: formateur) {
    this.selectedFormateur = { ...formateur };
    this.showDetails = true;
  }

  editFormateur(formateur: formateur) {

    this.selectedFormateur = { ...formateur, cycle:{id : formateur.cycle.id} };

    console.log('Selected Formateur',this.selectedFormateur)
    this.showForm = true;
  }

  deleteFormateur(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce formateur ?')) {
      this.formateurService.deleteformateur(id).subscribe(() => {
        this.loadFormateurs();
      });
    }
  }

  closeDetails() {
    this.showDetails = false;
    this.resetSelectedFormateur();
  }

  resetSelectedFormateur() {
    this.selectedFormateur = { id: 0, nom: '', prenom: '', direction: '', cycle:{id: 0} };
  }
}
