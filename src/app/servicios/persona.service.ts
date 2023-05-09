import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private http: HttpClient) {}

  //metodo para traer al perfil desde el back y la ddbb
  public traerPersona(): Observable<Persona> {
    //return this.http.get<Persona>('http://localhost:8080/traer/1');
    return this.http.get<Persona>(
      'https://segundaback-production.up.railway.app/traer/1'
    );
  }
}
