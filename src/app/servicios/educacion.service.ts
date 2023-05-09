import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  constructor(private http: HttpClient) {}

  //metodo para traer las educaciones desde el back y la ddbb
  public traerEducacion(): Observable<Educacion> {
    return this.http.get<Educacion>(
      'https://renderbackend-g27z.onrender.com/traereducacion'
    );
  }
}
