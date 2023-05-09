import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../modelos/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaeditService {
  constructor(private http: HttpClient) {}

  public editar(e: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(
      'https://segundaback-production.up.railway.app/modificarexperiencia',
      e
    );
  }
}
