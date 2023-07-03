import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../config/utils';
import { ILogin } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);

  login(email: string, password: string): Observable<Partial<ILogin>> {
    return this.http.post<Partial<ILogin>>(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
  }
}
