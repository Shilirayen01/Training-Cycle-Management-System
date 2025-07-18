import { Component, OnInit } from '@angular/core';
import { CycleService, Cycle } from '../cycle.service';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css']
})
export class CyclesComponent implements OnInit {

  cycles: Cycle[] = [];
  showForm = false;
  showDetails = false;

  selectedCycle: Cycle = {
    id: 0,
    entreprise: '',
    numAction: '',
    theme: '',
    creditImpot: '',
    droitTirage: '',
    modeFormation: '',
    lieuDeroulement: '',
    gouvernorat: '',
    dateDebut: '',
    dateFin: '',
    horaireDebut: '',
    horaireFin: '',
    pauseDebut: '',
    pauseFin: '',
    numSalle: ''
  };

  constructor(private cycleService: CycleService) {
  }

  ngOnInit(): void {
    this.loadCycles();
  }

  loadCycles() {
    this.cycleService.getAllCycles().subscribe((cycles: Cycle[]) => {
      this.cycles = cycles;
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetSelectedCycle();
  }

  convertDateToString(date: Date | string): string {
    if (typeof date === 'string') return date;
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return "";
  }


  convertTimeToString(time: Date | string): string {
        if (typeof time === 'string') return time;
        if (time instanceof Date) {
          const hours = String(time.getHours()).padStart(2, '0');
          const minutes = String(time.getMinutes()).padStart(2, '0');
          return `${hours}:${minutes}`;
        }
        return '';
      }


  addOrEditCycle() {
    const { id, ...cycleDataWithoutId } = this.selectedCycle;

    const data = {
      ...cycleDataWithoutId,
      creditImpot: this.selectedCycle.creditImpot ? "true" : "false",
      droitTirage: this.selectedCycle.droitTirage ? "true" : "false",
      dateDebut: this.convertDateToString(this.selectedCycle.dateDebut),
      dateFin: this.convertDateToString(this.selectedCycle.dateFin),
      horaireDebut: this.convertTimeToString(this.selectedCycle.horaireDebut),
      horaireFin: this.convertTimeToString(this.selectedCycle.horaireFin),
      pauseDebut: this.convertTimeToString(this.selectedCycle.pauseDebut),
      pauseFin: this.convertTimeToString(this.selectedCycle.pauseFin)
    };

    if (this.selectedCycle.id === 0) {
      console.log(data);

      this.cycleService.createCycle(data).subscribe((cycle: Cycle) => {
        this.loadCycles();
        this.showForm = false;
      });
    } else {
      this.cycleService.updateCycle(this.selectedCycle).subscribe((cycle: Cycle) => {
        this.loadCycles();
        this.showForm = false;
      });
    }
    this.resetSelectedCycle();
  }

  viewCycle(cycle: Cycle) {
    this.selectedCycle = { ...cycle };
    this.showDetails = true;
  }

  editCycle(cycle: Cycle) {
    this.selectedCycle = { ...cycle,
        dateDebut:cycle.dateDebut ,
        dateFin : cycle.dateFin,
        horaireDebut:cycle.horaireDebut,
        horaireFin : cycle.horaireFin,
        pauseDebut:cycle.pauseDebut,
        pauseFin : cycle.pauseFin
    };
    this.showForm = true;
  }
  deleteCycle(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce cycle ?')) {
      this.cycleService.deleteCycle(id).subscribe(
        () => {
          this.loadCycles();
        },
        (error) => {
          console.error('Erreur lors de la suppression du cycle', error);
        }
      );
    }
  }

  closeDetails() {
    this.showDetails = false;
    this.resetSelectedCycle();
  }

  resetSelectedCycle() {
    this.selectedCycle = {
        id: 0,
      entreprise: '',
      numAction: '',
      theme: '',
      creditImpot: '',
      droitTirage: '',
      modeFormation: '',
      lieuDeroulement: '',
      gouvernorat: '',
      dateDebut: '',
      dateFin: '',
      horaireDebut: '',
      horaireFin: '',
      pauseDebut: '',
      pauseFin: '',
      numSalle: ''
    };
  }
}
