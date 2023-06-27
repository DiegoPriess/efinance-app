import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../config/utils';
import { ISimulation } from '../../models/simulation';
import { IParcel } from '../../models/parcel';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private http = inject(HttpClient);
  private token: string | null = null;

  create(amountFinanced: number, amountOfTimes: number, tax: number, typeFinanced: string): Observable<Partial<ISimulation>> {
    return this.http.post<Partial<ISimulation>>(`${BASE_URL}/financing`, {
      amountFinanced,
      amountOfTimes,
      tax,
      typeFinanced
    });
  }

  listParcels(idSimulation?: string): Observable<Array<IParcel>> {
    return this.http.get<Array<IParcel>>(`${BASE_URL}/financing/${idSimulation}/parcelas`);
  }
}
