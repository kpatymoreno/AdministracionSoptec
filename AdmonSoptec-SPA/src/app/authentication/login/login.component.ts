import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_fx/auth.service';
import { AlertifyService } from 'src/app/_fx/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any =  {};
  loginform = true;
  recoverform = false;
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) {}

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
     this.alertify.success('Autenticado de forma correcta');
     this.router.navigate(['/starter']);
    }, error => {  this.alertify.error(error);
  });
  }

  loggedIn() {
    return this.authService.loggedIn();
   }

   logout() {
   localStorage.removeItem('token');
   this.alertify.message('Sesion cerrada');
 }
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
