import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../config/utils';
import { ISimulation } from '../../models/simulation';

@Injectable({
  providedIn: 'root',
})
export class HistoricService {
  private http = inject(HttpClient);

  listHistoric(): Observable<Array<ISimulation>> {
    return this.http.get<Array<ISimulation>>(`${BASE_URL}/financing/${localStorage.getItem("userId")}/historico`);
  }

  getHistoric(simulationId: string): Observable<ISimulation> {
    return this.http.get<ISimulation>(`${BASE_URL}/financing/${simulationId}`);
  }
}
