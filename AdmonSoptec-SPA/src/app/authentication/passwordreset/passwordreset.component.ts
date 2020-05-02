import { Resetpassword } from './../_models/resetpassword';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from '../../_helpers/must-match.validator';
import { PasswordresetService } from '../_services/passwordreset.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent implements OnInit {
  urlTree: any;
  model: Resetpassword = {
    email: '',
    token: '',
    password: '',
   };
   forgotpasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router
   ,private service: PasswordresetService, private arouter: ActivatedRoute) {

   }

  ngOnInit() {

    this.model.token =   this.arouter.snapshot.params.token;
 this.model.email =   this.arouter.snapshot.params.email;
console.dir(this.model.token)

    this.forgotpasswordForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }

  get f() { return this.forgotpasswordForm.controls; }

  Oncambiopassword() {
    console.dir(this.model);
    this.service.ResetearPassword(this.model).subscribe(
      (model: any) => {
        this.model = model;
        notify({ message: 'Su contraseña ha sido cambiada con exito' , width: 'auto', shading: false}, 'success', 1500);
        this.router.navigate(['/authentication/login']);
      },
      error => {

        notify({ message: error, width: 'auto', shading: false }, 'error', 1500);

      }
    );

  }



}
