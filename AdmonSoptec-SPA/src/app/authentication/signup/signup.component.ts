import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_fx/auth.service';
import { AlertifyService } from 'src/app/_fx/alertify.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  model: any = { };
  registerForm: FormGroup;
  submitted = false;
  constructor(private authService: AuthService,
    private alertify: AlertifyService, private formBuilder: FormBuilder, private router: Router) {}


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
}

get f() { return this.registerForm.controls; }




  Onregister() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
     this.authService.register(this.model).subscribe(() => {
      notify({message:'Usuario dado de alta de manera exitosa', width: 'auto', shading: false}, 'success',  1500);
      this.router.navigate(['/authentication/notificacionactivacion']);
     }, error => {
      this.alertify.error(error);
     }
    );


}
}
