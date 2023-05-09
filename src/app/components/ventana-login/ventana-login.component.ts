import { Component } from '@angular/core';
import { UserLogin } from 'src/app/modelos/user-login';
import { LoginService } from 'src/app/servicios/login.service';
import { ModoeditService } from 'src/app/servicios/modoedit.service';

@Component({
  selector: 'app-ventana-login',
  templateUrl: './ventana-login.component.html',
  styleUrls: ['./ventana-login.component.css'],
})
export class VentanaLoginComponent {
  usuario1: String = '';
  password1: String = '';
  seHaLogueado: boolean = false;
  user: UserLogin = new UserLogin('', '');
  constructor(
    private loginService: LoginService,
    public modoedit: ModoeditService
  ) {}

  recibirLogin(): void {
    this.user = new UserLogin(this.usuario1, this.password1);
    this.loginService.enviarLogin(this.user).subscribe((data) => {
      this.seHaLogueado = data;
      this.modoedit.disparador.emit(this.seHaLogueado);
      // if (this.seHaLogueado == false) {
      //   alert('CREDENCIALES NO VALIDAS');
      // }
    });
  }
}
