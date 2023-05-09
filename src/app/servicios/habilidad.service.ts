import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidad } from '../modelos/habilidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  constructor(private http: HttpClient) {}

  //metodo para traer las habilidades desde el back y la ddbb
  public traerHabilidades(): Observable<Habilidad> {
    return this.http.get<Habilidad>(
      'https://renderbackend-g27z.onrender.com/traerhabilidades'
    );
  }
}
