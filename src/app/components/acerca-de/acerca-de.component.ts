import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FootereditService } from 'src/app/serviciosedicion/footeredit.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona:Persona=new Persona('','','','','','','','','','','','','');
  isLogged:boolean=false;
  nuevoAcercaDe1:String=this.persona.acercaDe1;
  nuevoAcercaDe2:String=this.persona.acercaDe2;
  nuevoAcercaDe3:String=this.persona.acercaDe3;

  constructor(public personaService:PersonaService,
              public modoedit:ModoeditService,
              public footerEdit:FootereditService){}

  ngOnInit(): void {
      this.personaService.traerPersona().subscribe(data=>{
      this.persona=data;
      })

      this.modoedit.disparador.subscribe(data=>{
      this.isLogged=data;
      })
   }
   
   actualizar():void{
    this.persona.acercaDe1=this.nuevoAcercaDe1;
    this.persona.acercaDe2=this.nuevoAcercaDe2;
    this.persona.acercaDe3=this.nuevoAcercaDe3;
    this.footerEdit.editar(this.persona).subscribe(data=>{
      this.persona=data;
    });
   
  }
}
