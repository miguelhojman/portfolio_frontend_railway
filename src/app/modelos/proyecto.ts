export class Proyecto {
  id?: number;
  titulo: String;
  subtitulo: String;
  descripcion: String;
  enlace: String;

  constructor(
    id: number,
    titulo: String,
    subtitulo: String,
    descripcion: String,
    enlace: String
  ) {
    this.id = id;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.descripcion = descripcion;
    this.enlace = enlace;
  }
}
