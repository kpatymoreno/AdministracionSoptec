import { ConfigDataService } from './../../_fx/config-data.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { locale, loadMessages } from 'devextreme/localization';
import esMessages from 'devextreme/localization/messages/es.json';
import { RolesService } from '../_services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  models: any[];
  vFocucedRow: any;
  permiteEdit = false;
  permiteDele = false;
  urlOpcion = '/maint/roles';


  constructor( private service: RolesService, private configService: ConfigDataService) {
    locale(this.configService.getLocale());
    loadMessages(esMessages);
   }

  ngOnInit() {
    this.getPermisos();
    this.getPermiteEditar = this.getPermiteEditar.bind(this);
    this.getPermiteDele = this.getPermiteDele.bind(this);
    this.consultar();

  }

  consultar() {
    this.service.allRoles().subscribe((model: any[]) => {
      this.models = model;
      console.dir(model);
    });

  }

  getPermiteEditar(e) {
    if (this.permiteEdit) {
      return true;
    }
    return false;
  }

  getPermiteDele(e) {
    if (this.permiteDele) {
      return true;
    }
    return false;
  }

  rowRemoving(e) {
  }

  rowDblClick(e) {
  }

  editarClick(e) {
  }

  focusedRowChanged(e) {
  }

  getPermisos() {
      this.permiteEdit = true;
      this.permiteDele = true;
    }
  }


