import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../modelos/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacioneditService {
  constructor(private http: HttpClient) {}

  public editar(e: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(
      'https://renderbackend-g27z.onrender.com/modificareducacion',
      e
    );
  }
}
