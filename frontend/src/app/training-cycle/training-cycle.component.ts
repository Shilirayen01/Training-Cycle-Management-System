import { Component, OnInit } from '@angular/core';
import { Cycle, CycleService } from '../cycle.service';

@Component({
  selector: 'app-training-cycle',
  templateUrl: './training-cycle.component.html',
  styleUrls: ['./training-cycle.component.css']
})
export class TrainingCycleComponent implements OnInit {
  formations: Cycle[] = [];
  filteredFormations: Cycle[] = [];
  searchTheme: string = '';

  constructor(private cycleService: CycleService) {}

  ngOnInit(): void {
    this.loadCycles();
  }

  loadCycles() {
    this.cycleService.getAllCycles().subscribe((cycles: Cycle[]) => {
      this.formations = cycles;
      this.filteredFormations = cycles; // Initialise filteredFormations avec toutes les formations
    });
  }

  filterFormations() {
    if (this.searchTheme) {
      this.filteredFormations = this.formations.filter(formation =>
        formation.theme.toLowerCase().includes(this.searchTheme.toLowerCase())
      );
    } else {
      this.filteredFormations = this.formations; // Si aucun filtre, afficher toutes les formations
    }
  }

  resetFilter() {
    this.searchTheme = '';
    this.filteredFormations = this.formations; // Réinitialiser le filtre
  }
}
