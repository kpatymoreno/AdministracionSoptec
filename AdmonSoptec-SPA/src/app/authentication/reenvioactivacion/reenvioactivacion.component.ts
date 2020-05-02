import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reenvioactivacion',
  templateUrl: './reenvioactivacion.component.html',
  styleUrls: ['./reenvioactivacion.component.css']
})
export class ReenvioactivacionComponent implements OnInit {
  model: any = { };
  reenviotokenForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.reenviotokenForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]]

  });
  }

  get f() { return this.reenviotokenForm.controls; }
  Onreenviartoken() {
    /* this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
     this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Usuario dado de alta de manera exitosa');
      this.router.navigate(['/login']);
     }, error => {
      this.alertify.error(error);
     }
    ); */
  }
}
