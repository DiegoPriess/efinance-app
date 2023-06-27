import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../config/utils';
import { IUsuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private token: string | null = null;

  login(email: string, password: string): Observable<Partial<IUsuario>> {
    return this.http.post<Partial<IUsuario>>(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
  }
}
