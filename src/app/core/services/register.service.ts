import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../config/utils';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private http = inject(HttpClient);

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${BASE_URL}/users`, {
      name,
      email,
      password,
    });
  }
}
