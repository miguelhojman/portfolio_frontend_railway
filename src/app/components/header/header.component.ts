import { Component } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { UserLogin } from 'src/app/modelos/user-login';
import { CambiarCredencialesService } from 'src/app/servicios/cambiar-credenciales.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FootereditService } from 'src/app/serviciosedicion/footeredit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  persona: Persona = new Persona(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );
  isLogged: boolean = false;
  nuevoMail: String = this.persona.mail;
  nuevoLinkedin: String = this.persona.linkedin;
  nuevoGithub: String = this.persona.github;
  nuevoFacebook: String = this.persona.facebook;
  nuevoTwitter: String = this.persona.twitter;
  usuario!: UserLogin;
  nuevoUsuario: String = '';
  nuevoPassword: String = '';
  constructor(
    public personaService: PersonaService,
    public modoedit: ModoeditService,
    public footerEdit: FootereditService,
    public cambiarCred: CambiarCredencialesService
  ) {}

  ngOnInit(): void {
    this.personaService.traerPersona().subscribe((data) => {
      this.persona = data;
    });

    this.modoedit.disparador.subscribe((data) => {
      this.isLogged = data;
    });
  }

  recargar(): void {
    window.location.reload();
  }
  cambiarCredenciales(): void {
    this.usuario = new UserLogin(this.nuevoUsuario, this.nuevoPassword);
    this.cambiarCred.enviarCredenciales(this.usuario).subscribe((data) => {});
  }
  actualizar(): void {
    this.persona.mail = this.nuevoMail;
    this.persona.linkedin = this.nuevoLinkedin;
    this.persona.github = this.nuevoGithub;
    this.persona.facebook = this.nuevoFacebook;
    this.persona.twitter = this.nuevoTwitter;
    this.footerEdit.editar(this.persona).subscribe((data) => {
      this.persona = data;
    });
  }
}
