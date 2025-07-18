import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cycle {
  id: number;
  theme?: string;
  numSalle?:string;
  dateDebut?: string;

}

export interface Participant {
  id: number;
  nomPrenom: string;
  nomPrenomArabe: string;
  numCin: string;
  directionService: string;
  entreprise: string;
  engagement: string;
  cycle: Cycle | null;
}


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl = 'http://localhost:8081/api/participants'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getAllParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.apiUrl);
  }

}
