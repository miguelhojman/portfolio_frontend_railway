import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionBorradoService {
  url: string = '';

  constructor(private http: HttpClient) {}

  public eliminar(id: number): Observable<Educacion> {
    this.url =
      'https://renderbackend-g27z.onrender.com/eliminareducacion/' + id;
    return this.http.delete<Educacion>(this.url);
  }
}
