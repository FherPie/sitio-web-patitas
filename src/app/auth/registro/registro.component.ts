import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { Router } from  "@angular/router";
import { User } from '../User';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit(): void {
  }


  register(form: { value: User; }) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('inicio-page');
    },
    err=>{
      alert("Registrado con Exito ;)");
      this.router.navigateByUrl('inicio-page');
     
      //this.presentToast(err.error);
    });
  }


}
