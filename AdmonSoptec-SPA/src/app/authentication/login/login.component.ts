import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_fx/auth.service';
import { AlertifyService } from 'src/app/_fx/alertify.service';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';

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
      notify({message:'Ingreso exitoso', width: 'auto', shading: false}, 'success',  1500);
     this.router.navigate(['/starter']);
    },error => {
      notify({ message: 'Autenticacion no ha sido exitosa, verifique credenciales', width: 'auto', shading: false }, 'error', 1500);
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
