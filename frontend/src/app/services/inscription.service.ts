import { Participant } from './participant.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = 'http://localhost:8081/api/participants';

  constructor(private http: HttpClient) { }


  addParticipant(Participant: any, cycleId: number): Observable<Participant> {
    const url = `http://localhost:8081/api/participants/${cycleId}`;
    return this.http.post<any>(url, Participant);

  }
}


