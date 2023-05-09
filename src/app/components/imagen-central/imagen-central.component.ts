import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FootereditService } from 'src/app/serviciosedicion/footeredit.service';

@Component({
  selector: 'app-imagen-central',
  templateUrl: './imagen-central.component.html',
  styleUrls: ['./imagen-central.component.css']
})
export class ImagenCentralComponent implements OnInit {  
  persona:Persona=new Persona('','','','','','','','','','','','','');
  isLogged:boolean=false;
  nuevoNombreCompleto:String=this.persona.nombreCompleto;
  nuevoPuesto:String=this.persona.puesto;
  

  constructor(public personaService:PersonaService,public modoedit:ModoeditService,
              public footerEdit:FootereditService){}

  ngOnInit(): void {
      this.personaService.traerPersona().subscribe(data=>{
      this.persona=data;
      })
    this.modoedit.disparador.subscribe(data=>{
      this.isLogged=data;})   
   }

   actualizar():void{
    this.persona.nombreCompleto=this.nuevoNombreCompleto;
    this.persona.puesto=this.nuevoPuesto;
    this.footerEdit.editar(this.persona).subscribe(data=>{
      this.persona=data;
    });
  }
  }


