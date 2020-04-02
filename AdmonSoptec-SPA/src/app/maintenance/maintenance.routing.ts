import { Routes } from '@angular/router';

import { MapgoogleComponent } from './map-google/map-google.component';
import { RolesComponent } from './roles/roles.component';

export const MaintRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'roles',
        component: RolesComponent,
        data: {
          title: 'Roles',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Mantenimiento de Roles' }
          ]
        }
      }
    ]
  }
];
