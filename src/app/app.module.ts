import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaNosotrosComponent } from './pantalla-nosotros/pantalla-nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordForgotComponent } from './auth/password-forgot/password-forgot.component';
import { OlvidoContrasenaComponent } from './auth/olvido-contrasena/olvido-contrasena.component';
import { ListaFundacionesComponent } from './lista-fundaciones/lista-fundaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    PantallaNosotrosComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    PasswordForgotComponent,
    OlvidoContrasenaComponent,
    ListaFundacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([{path: 'home-page/:id', component: AppComponent},
    {path: 'nosotros-page/:id', component: PantallaNosotrosComponent},
    {path: 'inicio-page', component: InicioComponent},
    {path: 'registro-page', component: RegistroComponent},
    {path: 'olvido-contrasena', component: OlvidoContrasenaComponent},
    {path: 'login-page', component: LoginComponent},
    {path: 'fundaciones-page', component: ListaFundacionesComponent},
    {path: 'p', redirectTo:'registro-page', pathMatch: 'full'},
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
