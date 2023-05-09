import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { ExperienciaBorradoService } from 'src/app/serviciosedicion/experiencia-borrado.service';
import { ExperienciaeditService } from 'src/app/serviciosedicion/experienciaedit.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencia: any;
  isLogged: boolean = false;
  nuevaEmpresa: String = '';
  nuevoRubro: String = '';
  nuevoPeriodo: String = '';
  nuevaTarea: String = '';
  exp!: Experiencia;
  nuevoId!: number;
  contador: number = 0;
  contador2: number = 0;
  contador3: number = 0;
  idEliminar: number = 0;

  constructor(
    private experienciaService: ExperienciaService,
    private modoedit: ModoeditService,
    private editarExp: ExperienciaeditService,
    private eliminarExp: ExperienciaBorradoService
  ) {}

  ngOnInit(): void {
    this.experienciaService.traerExperiencias().subscribe((data) => {
      this.experiencia = data;
    });

    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
  //metodo edicion-----------------------------------
  editar(): void {
    this.experiencia.forEach(
      (item: { empresa: String; id: number; nuevaEmpresa: String }) => {
        if (item.empresa == this.nuevaEmpresa) {
          this.exp = new Experiencia(
            item.id,
            item.empresa,
            this.nuevoRubro,
            this.nuevoPeriodo,
            this.nuevaTarea
          );
          this.contador++;
        }
      }
    );
    if (this.contador == 0) {
      alert('Empresa no encontrada.Tal vez la quieres AGREGAR');
      this.contador = 0;
    } else {
      this.editarExp.editar(this.exp).subscribe((data) => {
        this.exp = data;
        this.experienciaService.traerExperiencias().subscribe((data) => {
          this.experiencia = data;
        });
      });
    }
  }
  //metodo agregar-------------------------------------
  agregar(): void {
    this.experiencia.forEach((x: { empresa: String }) => {
      if (x.empresa == this.nuevaEmpresa) {
        this.contador2++;
      }
    });
    if (this.contador2 != 0) {
      alert('La experiencia ya existe.Tal vez la quieras EDITAR');
      this.contador2 = 0;
    } else {
      this.exp = new Experiencia(
        this.nuevoId,
        this.nuevaEmpresa,
        this.nuevoRubro,
        this.nuevoPeriodo,
        this.nuevaTarea
      );
      this.editarExp.editar(this.exp).subscribe((data) => {
        this.exp = data;
        this.experienciaService.traerExperiencias().subscribe((data) => {
          this.experiencia = data;
        });
      });
    }
  }
  //metodo eliminar-----------------------------------
  eliminar(): void {
    this.experiencia.forEach((item: { empresa: String; id: number }) => {
      if (item.empresa == this.nuevaEmpresa) {
        this.idEliminar = item.id;
        this.contador3++;
      }
    });
    if (this.contador3 == 0) {
      alert('No existe esa empresa.');
    } else {
      this.eliminarExp.eliminar(this.idEliminar).subscribe((data) => {
        this.experiencia = data;
      });
      this.contador3 = 0;
    }
  }
}
