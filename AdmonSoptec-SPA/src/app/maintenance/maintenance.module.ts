import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { MaintRoutes } from './maintenance.routing';

import { RolesComponent } from './roles/roles.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MaintRoutes), AgmCoreModule],
  declarations: [
   RolesComponent
  ]
})
export class MaintModule {}
