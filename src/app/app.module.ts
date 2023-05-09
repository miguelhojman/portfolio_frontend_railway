import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }from '@angular/common/http';


import { ImagenCentralComponent } from './components/imagen-central/imagen-central.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { VentanaLoginComponent } from './components/ventana-login/ventana-login.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorLoginComponent } from './components/error-login/error-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagenCentralComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    VentanaLoginComponent,
    ErrorLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
