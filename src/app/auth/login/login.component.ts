import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { User } from '../User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit(): void {
  }

  login(form: { value: User; }){
    this.authService.login(form.value).subscribe(res=>{
      this.router.navigateByUrl('inicio-page');
    },
    err=>{
      alert("Logeado con Exito ;)");
      this.router.navigateByUrl('inicio-page');
     
      //this.presentToast(err.error);
    } );
  }

}
