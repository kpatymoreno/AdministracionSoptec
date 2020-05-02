import { ActivationaccountService } from './../_services/activationaccount.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import notify from 'devextreme/ui/notify';



@Component({
  selector: 'app-activationaccount',
  templateUrl: './activationaccount.component.html',
  styleUrls: ['./activationaccount.component.css']
})
export class ActivationaccountComponent implements OnInit {
  model: any = {};

  constructor(private arouter: ActivatedRoute,
    private router: Router, private service: ActivationaccountService) { }

  ngOnInit() {
    this.service.ConfirmationEmail(this.arouter.snapshot.params.token, this.arouter.snapshot.params.email).subscribe(
      (model: any) => {
        this.model = model;
        notify({ message: 'La cuenta: ' + this.arouter.snapshot.params.email + ' se activo con exito' , width: 'auto', shading: false}, 'success', 1500);
      },
      error => {
        notify({ message: error, width: 'auto', shading: false }, 'error', 1500);
      }
    );

  }



}
