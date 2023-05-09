export class Educacion {
  id?: number;
  nivel: String;
  institucion: String;
  descripcion: String;

  constructor(
    id: number,
    nivel: String,
    institucion: String,
    descripcion: String
  ) {
    this.id = id;
    this.nivel = nivel;
    this.institucion = institucion;
    this.descripcion = descripcion;
  }
}
