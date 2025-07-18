import { Component, OnInit } from '@angular/core';
import { ParticipantService, Participant } from '../services/participant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: Participant[] = [];
  filteredParticipants: Participant[] = [];
  filters = {
    numSalle: '',
    dateDebut: '',
    theme: ''
  };
  showDetails = false;
  selectedParticipant: Participant | null = null;

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.loadParticipants();
  }

  loadParticipants() {
    this.participantService.getAllParticipants().subscribe((participants) => {
      this.participants = participants;
      this.filteredParticipants = [...participants];
    });
  }
  applyFilters() {
    this.filteredParticipants = this.participants.filter(participant => {
      if (!participant.cycle) {
        return false; // Exclude participants without a cycle
      }

      const numSalleMatch = !this.filters.numSalle ||
        (participant.cycle.numSalle && participant.cycle.numSalle.toLowerCase().includes(this.filters.numSalle.toLowerCase()));

      const dateDebutMatch = !this.filters.dateDebut ||
        (participant.cycle.dateDebut && participant.cycle.dateDebut === this.filters.dateDebut);

      const themeMatch = !this.filters.theme ||
        (participant.cycle.theme && participant.cycle.theme.toLowerCase().includes(this.filters.theme.toLowerCase()));

      return numSalleMatch && dateDebutMatch && themeMatch;
    });
  }

  viewParticipant(participant: Participant) {
    this.selectedParticipant = { ...participant };
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
    this.selectedParticipant = null;
  }
}
