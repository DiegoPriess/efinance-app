import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../config/utils';
import { IUsuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  getUser(): Observable<Partial<IUsuario>> {
    return this.http.get<Partial<IUsuario>>(`${BASE_URL}/users/${localStorage.getItem("userId")}`);
  }

  editUser(name: string): Observable<any> {
    console.log(name);
    return this.http.put(`${BASE_URL}/users/${localStorage.getItem("userId")}`, {
      name
    });
  }
}
