import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/maintenance/_services/roles.service';
import { Role } from 'src/app/maintenance/_models/role';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  tituloVentana = 'Roles';
  subTituloVentana: string;
  estadoMtto: number;
  borderClass = 'card-border-color-primary';
  permiteSalir: boolean;
  role: Role = {
    id: 0,
    name : ''
  };

  constructor(private arouter: ActivatedRoute,
    private router: Router, private service: RolesService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.service.singleRole(+this.arouter.snapshot.params.id).subscribe((role: Role) => {
      this.role = role;
    });
  }
  getReadOnly() {
  }
  cancel() {
  }
  guardar() {
  }
}
