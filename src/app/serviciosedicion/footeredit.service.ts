import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootereditService {
  constructor(private http: HttpClient) {}

  public editar(p: Persona): Observable<Persona> {
    return this.http.put<Persona>(
      'https://renderbackend-g27z.onrender.com/modificar',
      p
    );
  }
}
