import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cycle {
  id:number;
  entreprise: string;
  numAction: string;
  theme: string;
  creditImpot: string;
  droitTirage: string;
  modeFormation: string;
  lieuDeroulement: string;
  gouvernorat: string;
  dateDebut: string;
  dateFin: string;
  horaireDebut:string;
  horaireFin:string;
  pauseDebut:string;
  pauseFin:string;
  numSalle: string;
}
@Injectable({
  providedIn: 'root'
})
export class CycleService {
  private apiUrl = 'http://localhost:8081/api/cycles';

  constructor(private http: HttpClient) {}

  getAllCycles(): Observable<Cycle[]> {
    return this.http.get<Cycle[]>(this.apiUrl);
  }

  getCycleById(id: number): Observable<Cycle> {
    return this.http.get<Cycle>(`${this.apiUrl}/${id}`);
  }

  createCycle(cycle: any): Observable<Cycle> {
    return this.http.post<Cycle>(this.apiUrl, cycle);
  }

  updateCycle(cycle: any): Observable<Cycle> {
    return this.http.put<Cycle>(`${this.apiUrl}/${cycle.id}`, cycle);
  }

  deleteCycle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
