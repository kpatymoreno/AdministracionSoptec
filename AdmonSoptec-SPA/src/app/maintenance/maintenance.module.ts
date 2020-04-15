import { DxDataGridModule,
  DxDropDownBoxModule,
  DxListModule,
  DxNumberBoxModule,
  DxDateBoxModule,
  DxTextBoxModule,
  DxTextAreaModule,
  DxCheckBoxModule,
  DxToolbarModule,
  DxLoadPanelModule,
  DxButtonModule,
  DxValidatorModule} from 'devextreme-angular';


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { MaintRoutes } from './maintenance.routing';

import { RolesComponent } from './roles/roles.component';
import { RolesFormComponent } from './roles/roles-form/roles-form/roles-form.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MaintRoutes), AgmCoreModule, DxDataGridModule,
    DxListModule,
    DxDropDownBoxModule,
    DxNumberBoxModule,
    DxDateBoxModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxCheckBoxModule,
    DxToolbarModule,
    DxLoadPanelModule,
    DxButtonModule,
    DxValidatorModule],
  declarations: [
   RolesComponent,
   RolesFormComponent
  ]
})
export class MaintModule {}
