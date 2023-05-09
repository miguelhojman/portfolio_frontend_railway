import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  constructor(private http: HttpClient) {}

  //metodo para traer las experiencias desde el back y la ddbb
  public traerExperiencias(): Observable<Experiencia> {
    return this.http.get<Experiencia>(
      'https://renderbackend-g27z.onrender.com/traerexperiencia'
    );
  }
}
