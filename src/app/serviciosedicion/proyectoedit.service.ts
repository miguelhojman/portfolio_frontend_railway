import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectoeditService {
  constructor(private http: HttpClient) {}

  public editar(p: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(
      'https://renderbackend-g27z.onrender.com/modificarproyecto',
      p
    );
  }
}
