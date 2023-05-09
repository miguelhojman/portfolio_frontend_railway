import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../modelos/user-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CambiarCredencialesService {
  constructor(private http: HttpClient) {}

  enviarCredenciales(user: UserLogin): Observable<boolean> {
    return this.http.post<boolean>(
      'https://renderbackend-g27z.onrender.com/cambiarcredenciales',
      user
    );
  }
}
