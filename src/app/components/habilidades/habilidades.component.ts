import { Component } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { HabilidadBorradoService } from 'src/app/serviciosedicion/habilidad-borrado.service';
import { HabilidadeditService } from 'src/app/serviciosedicion/habilidadedit.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent {
  isLogged: boolean = false;
  habilidad: any; //al inicio se llena este array con las habilidades
  hab!: Habilidad;
  nuevoId!: number;
  nuevoNombre: String = '';
  nuevoPorcentaje!: number;
  contador: number = 0;
  contador2: number = 0;
  contador3: number = 0;
  idEliminar: number = 0;

  constructor(
    public habilidadService: HabilidadService,
    public modoedit: ModoeditService,
    public editarHab: HabilidadeditService,
    public eliminarHab: HabilidadBorradoService
  ) {}

  ngOnInit(): void {
    this.habilidadService.traerHabilidades().subscribe((data) => {
      this.habilidad = data;
    });
    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
  //metodo agregar
  agregar(): void {
    this.habilidad.forEach(
      (item: { porcentaje: number; nombreHabilidad: String; id: number }) => {
        if (item.nombreHabilidad == this.nuevoNombre) {
          this.contador2++;
        }
      }
    );
    if (this.contador2 != 0) {
      alert('La habilidad ya existe.Tal vez la quieras EDITAR');
      this.contador2 = 0;
    } else {
      this.hab = new Habilidad(
        this.nuevoId,
        this.nuevoNombre,
        this.nuevoPorcentaje
      );
      this.editarHab.editar(this.hab).subscribe((data) => {
        this.hab = data;
        this.habilidadService.traerHabilidades().subscribe((data) => {
          this.habilidad = data;
        });
      });
    }
  }
  //metodo editar
  editar(): void {
    this.habilidad.forEach(
      (item: { porcentaje: number; nombreHabilidad: String; id: number }) => {
        if (item.nombreHabilidad == this.nuevoNombre) {
          this.hab = new Habilidad(
            item.id,
            item.nombreHabilidad,
            this.nuevoPorcentaje
          );
          this.contador++;
        }
      }
    );
    if (this.contador == 0) {
      alert('Habilidad no encontrada.Tal vez la quieres AGREGAR');
      this.contador = 0;
    } else {
      this.editarHab.editar(this.hab).subscribe((data) => {
        this.hab = data;
        this.habilidadService.traerHabilidades().subscribe((data) => {
          this.habilidad = data;
        });
      });
    }
  }
  //metodo eliminar
  eliminar(): void {
    this.habilidad.forEach(
      (item: { porcentaje: number; nombreHabilidad: String; id: number }) => {
        if (item.nombreHabilidad == this.nuevoNombre) {
          this.idEliminar = item.id;
          this.contador3++;
        }
      }
    );
    if (this.contador3 == 0) {
      alert('No existe esa habilidad.');
    } else {
      this.eliminarHab.eliminar(this.idEliminar).subscribe((data) => {
        this.habilidad = data;
      });
    }
  }
}
