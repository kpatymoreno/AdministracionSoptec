import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { PasswordresetService } from '../_services/passwordreset.service';

@Component({
  selector: 'app-reenvioresetpassword',
  templateUrl: './reenvioresetpassword.component.html',
  styleUrls: ['./reenvioresetpassword.component.css']
})
export class ReenvioresetpasswordComponent implements OnInit {

  model: any = { };
  reenviotokenForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private service: PasswordresetService) { }

  ngOnInit() {
    this.reenviotokenForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]]

  });
  }

  get f() { return this.reenviotokenForm.controls; }
  Onreenviartoken() {
    this.submitted = true;

    if (this.reenviotokenForm.invalid) {
      return;
    }
     this.service.CorreoResetearPassword(this.model).subscribe(() => {
      notify({ message: 'Se ha enviado correo con exito' , width: 'auto', shading: false}, 'success', 1500);

     }, error => {
      notify({ message: error, width: 'auto', shading: false }, 'error', 1500);
     }
    );

    this.router.navigate(['/authentication/notificacioncambiopassword']);
  }
}
