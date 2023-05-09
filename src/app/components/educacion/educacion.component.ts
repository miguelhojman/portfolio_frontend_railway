import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { EducacionBorradoService } from 'src/app/serviciosedicion/educacion-borrado.service';
import { EducacioneditService } from 'src/app/serviciosedicion/educacionedit.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  isLogged: boolean = false;
  educacion: any;
  edu!: Educacion;
  nuevoId!: number;
  nuevoNivel: String = '';
  nuevaInstitucion: String = '';
  nuevaDescripcion: String = '';
  contador: number = 0;
  contador2: number = 0;
  contador3: number = 0;
  idEliminar!: number;

  constructor(
    public educacionService: EducacionService,
    public modoedit: ModoeditService,
    public educacionedit: EducacioneditService,
    public educacionborrar: EducacionBorradoService
  ) {}

  ngOnInit(): void {
    this.educacionService.traerEducacion().subscribe((data) => {
      this.educacion = data;
    });
    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }
  //metodo agregar
  agregar(): void {
    this.educacion.forEach((item: { institucion: String }) => {
      if (item.institucion == this.nuevaInstitucion) {
        this.contador2++;
      }
    });
    if (this.contador2 != 0) {
      alert('La capacitación ya existe.Tal vez la quieras EDITAR');
      this.contador2 = 0;
    } else {
      this.edu = new Educacion(
        this.nuevoId,
        this.nuevoNivel,
        this.nuevaInstitucion,
        this.nuevaDescripcion
      );
      this.educacionedit.editar(this.edu).subscribe((data) => {
        this.edu = data;
        this.educacionService.traerEducacion().subscribe((data) => {
          this.educacion = data;
        });
      });
    }
  }
  //metodo eliminar
  eliminar(): void {
    this.educacion.forEach((item: { institucion: String; id: number }) => {
      if (item.institucion == this.nuevaInstitucion) {
        this.idEliminar = item.id;
        this.contador3++;
      }
    });
    if (this.contador3 == 0) {
      alert('No existe esa capacitación.');
    } else {
      this.educacionborrar.eliminar(this.idEliminar).subscribe((data) => {
        this.educacion = data;
      });
      this.contador3 = 0;
    }
  }
  //metodo editar
  editar(): void {
    this.educacion.forEach((item: { institucion: String; id: number }) => {
      if (item.institucion == this.nuevaInstitucion) {
        this.edu = new Educacion(
          item.id,
          this.nuevoNivel,
          item.institucion,
          this.nuevaDescripcion
        );
        this.contador++;
      }
    });
    if (this.contador == 0) {
      alert('Capacitación no encontrada.Tal vez la quieres AGREGAR');
      this.contador = 0;
    } else {
      this.educacionedit.editar(this.edu).subscribe((data) => {
        this.edu = data;
        this.educacionService.traerEducacion().subscribe((data) => {
          this.educacion = data;
        });
      });
    }
  }
}
