import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cycle {
  id: number;
  theme?: string;
}

export interface formateur {
  id: number;
  nom: string;
  prenom: string;
  direction: string;
  cycle: Cycle;
}

@Injectable({
  providedIn: 'root',
})
export class FormateurService {
  private apiUrl = 'http://localhost:8081/api/formateurs';

  constructor(private http: HttpClient) {
  }

  getAllFormateurs(): Observable<formateur[]> {
    return this.http.get<formateur[]>(this.apiUrl);
  }

  getformateurById(id: number): Observable<formateur> {
    return this.http.get<formateur>(`${this.apiUrl}/${id}`);
  }


  addformateur(formateur: any): Observable<formateur> {
    return this.http.post<formateur>(this.apiUrl, formateur);
  }

  editformateur(formateur: formateur): Observable<formateur> {
    return this.http.put<formateur>(`${this.apiUrl}/${formateur.id}`, formateur);
  }



  deleteformateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
