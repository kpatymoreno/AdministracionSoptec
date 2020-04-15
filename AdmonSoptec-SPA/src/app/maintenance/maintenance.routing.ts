import { Routes } from '@angular/router';

import { MapgoogleComponent } from './map-google/map-google.component';
import { RolesComponent } from './roles/roles.component';
import { RolesFormComponent } from './roles/roles-form/roles-form/roles-form.component';
import { AuthGuard } from '../_guards/auth.guard';

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
      },
      {
        path: 'roles-form/:id',
        component: RolesFormComponent,
        data: {
          title: 'Detalle de Roles',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Detalle de Roles' }
          ]
        }
      },
      {
        path: 'roles-form/new',
        component: RolesFormComponent,
        data: {
          title: 'Nuevo',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Detalle de Roles' }
          ],
          CanActivate: [AuthGuard],
        }
      },
      {
        path: 'roles-form/edit/:id',
        component: RolesFormComponent,
        data: {
          title: 'Modificar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Detalle de Roles' }
          ]
        }
      }
    ]
  }
];
