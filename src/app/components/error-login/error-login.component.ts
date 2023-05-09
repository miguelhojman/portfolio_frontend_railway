import { Component } from '@angular/core';
import { ModoeditService } from 'src/app/servicios/modoedit.service';

@Component({
  selector: 'app-error-login',
  templateUrl: './error-login.component.html',
  styleUrls: ['./error-login.component.css'],
})
export class ErrorLoginComponent {
  errorLogin: boolean = true;
  constructor(public modoedit: ModoeditService) {}

  ngOnInit(): void {
    this.modoedit.disparador.subscribe((data) => {
      this.errorLogin = data;
    });
  }
  recargar(): void {
    window.location.reload();
  }
}
