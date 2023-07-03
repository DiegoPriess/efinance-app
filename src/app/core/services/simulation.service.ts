import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../config/utils';
import { ISimulation } from '../models/simulation';
import { IParcel } from '../models/parcel';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private http = inject(HttpClient);

  create(amountFinanced: number, amountOfTimes: number, tax: number, typeFinanced: string): Observable<Partial<ISimulation>> {
    return this.http.post<Partial<ISimulation>>(`${BASE_URL}/financing`, this.buildSimulation(amountFinanced, amountOfTimes, tax, typeFinanced));
  }

  buildSimulation(amountFinanced: number, amountOfTimes: number, tax: number, typeFinanced: string): Partial<ISimulation> {
    let newSimulation!: ISimulation;
    
    let userId = localStorage.getItem("userId");

    if(userId) {
      newSimulation = {
        amountFinanced: amountFinanced,
        amountOfTimes: amountOfTimes,
        tax: tax,
        typeFinanced: typeFinanced,
        userId: userId
      }
    } else {
      newSimulation = {
        amountFinanced: amountFinanced,
        amountOfTimes: amountOfTimes,
        tax: tax,
        typeFinanced: typeFinanced
      }
    }

    return newSimulation;
  }

  listParcels(idSimulation?: string): Observable<Array<IParcel>> {
    return this.http.get<Array<IParcel>>(`${BASE_URL}/financing/${idSimulation}/parcelas`);
  }
}
