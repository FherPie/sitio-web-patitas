import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.component.html',
  styleUrls: ['./olvido-contrasena.component.css']
})
export class OlvidoContrasenaComponent implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit(): void {
  }

  recuperarContrasena(form: { value: User; }){
    this.authService.recuperarContrasena(form.value).subscribe(res=>{
      alert("Se ha enviado instrucciones a tu email con Exito ;)");
    },
    err=>{
      alert("Se ha enviado instrucciones a tu email con Exito ;)");     
      //this.presentToast(err.error);
    } );
  }

}
