import { Component } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FootereditService } from 'src/app/serviciosedicion/footeredit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  persona:Persona=new Persona('','','','','','','','','','','','','');
  isLogged:boolean=false;
  nuevoFooter1:String=this.persona.footer1;
  nuevoFooter2:String=this.persona.footer2;
 
  constructor(public personaService:PersonaService,
              public modoedit:ModoeditService,
              public footerEdit:FootereditService){}

  ngOnInit(): void {
      this.personaService.traerPersona().subscribe(data=>{
      this.persona=data;
      }
    )
      this.modoedit.disparador.subscribe(data=>{
        this.isLogged=data;
      })
    }
    
    actualizar():void{
      this.persona.footer1=this.nuevoFooter1;
      this.persona.footer2=this.nuevoFooter2;
      this.footerEdit.editar(this.persona).subscribe(data=>{
        this.persona=data;
      });
    }
}
