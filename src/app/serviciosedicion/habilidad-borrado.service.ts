import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';

@Injectable({
  providedIn: 'root',
})
export class HabilidadBorradoService {
  url: string = '';
  constructor(private http: HttpClient) {}

  public eliminar(id: number): Observable<Habilidad> {
    this.url =
      'https://renderbackend-g27z.onrender.com/eliminarhabilidad/' + id;
    return this.http.delete<Habilidad>(this.url);
  }
}
