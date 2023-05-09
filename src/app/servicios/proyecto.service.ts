import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  constructor(private http: HttpClient) {}

  public traerProyectos(): Observable<Proyecto> {
    return this.http.get<Proyecto>(
      'https://renderbackend-g27z.onrender.com/traerproyectos'
    );
  }
}
