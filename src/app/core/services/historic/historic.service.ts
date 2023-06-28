import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../config/utils';
import { ISimulation } from '../../models/simulation';
import { IParcel } from '../../models/parcel';
import { IHistoric } from '../../models/historic';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private http = inject(HttpClient);

  listHistoric(): Observable<Array<IHistoric>> {
    return this.http.get<Array<IHistoric>>(`${BASE_URL}/financing/${localStorage.getItem("userId")}/parcelas`);
  }
}
