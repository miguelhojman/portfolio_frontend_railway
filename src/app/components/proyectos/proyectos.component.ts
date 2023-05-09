import { Component } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ProyectoBorradoService } from 'src/app/serviciosedicion/proyecto-borrado.service';
import { ProyectoeditService } from 'src/app/serviciosedicion/proyectoedit.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  proyecto: any;
  proy!: Proyecto;
  isLogged: boolean = false;
  nuevoId!: number;
  nuevoSubtitulo: String = '';
  nuevoTitulo: String = '';
  nuevaDescripcion: String = '';
  nuevoEnlace: String = '';
  contador: number = 0;
  contador2: number = 0;
  contador3: number = 0;
  idEliminar: number = 0;

  constructor(
    private proyectoService: ProyectoService,
    public modoedit: ModoeditService,
    public editarProyecto: ProyectoeditService,
    public eliminarProyecto: ProyectoBorradoService
  ) {}

  ngOnInit(): void {
    this.proyectoService.traerProyectos().subscribe((data) => {
      this.proyecto = data;
    });

    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
  //metodo editar
  editar(): void {
    this.proyecto.forEach((item: { titulo: String; id: number }) => {
      if (item.titulo == this.nuevoTitulo) {
        this.proy = new Proyecto(
          item.id,
          item.titulo,
          this.nuevoSubtitulo,
          this.nuevaDescripcion,
          this.nuevoEnlace
        );
        this.contador++;
      }
    });
    if (this.contador == 0) {
      alert('Proyecto no encontrado.Tal vez lo quieras AGREGAR');
      this.contador = 0;
    } else {
      this.editarProyecto.editar(this.proy).subscribe((data) => {
        this.proy = data;
        this.proyectoService.traerProyectos().subscribe((data) => {
          this.proyecto = data;
        });
      });
      this.contador = 0;
    }
  }
  //metodo agregar
  agregar(): void {
    this.proyecto.forEach((item: { titulo: String }) => {
      if (item.titulo == this.nuevoTitulo) {
        this.contador2++;
      }
    });
    if (this.contador2 != 0) {
      alert('El proyecto ya existe.Tal vez la quieras EDITAR');
      this.contador2 = 0;
    } else {
      this.proy = new Proyecto(
        this.nuevoId,
        this.nuevoTitulo,
        this.nuevoSubtitulo,
        this.nuevaDescripcion,
        this.nuevoEnlace
      );
      this.editarProyecto.editar(this.proy).subscribe((data) => {
        this.proy = data;
        this.proyectoService.traerProyectos().subscribe((data) => {
          this.proyecto = data;
        });
      });
    }
  }
  //metodo eliminar
  eliminar(): void {
    this.proyecto.forEach((item: { titulo: String; id: number }) => {
      if (item.titulo == this.nuevoTitulo) {
        this.idEliminar = item.id;
        this.contador3++;
      }
    });
    if (this.contador3 == 0) {
      alert('No existe ese proyecto.');
    } else {
      this.eliminarProyecto.eliminar(this.idEliminar).subscribe((data) => {
        this.proyecto = data;
      });
      this.contador3 = 0;
    }
  }
}
