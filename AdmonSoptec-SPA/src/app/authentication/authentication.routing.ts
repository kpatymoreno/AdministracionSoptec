import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { ReenvioresetpasswordComponent } from './reenvioresetpassword/reenvioresetpassword.component';

import { ReenvioactivacionComponent } from './reenvioactivacion/reenvioactivacion.component';
import { NotificacionactivacionComponent } from './notificacionactivacion/notificacionactivacion.component';
import { ActivationaccountComponent } from './activationaccount/activationaccount.component';

import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { NotificacioncambiopasswordComponent } from './notificacioncambiopassword/notificacioncambiopassword.component';




export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'notfoundComponent',
        component: NotfoundComponent
      },
      {
        path: 'activationaccount/:token/:email',
        component: ActivationaccountComponent
      },
      {
        path: 'notificacionactivacion',
        component: NotificacionactivacionComponent
      },
      {
        path: 'reenvioactivacion',
        component: ReenvioactivacionComponent
      },
      {
        path: 'notificacioncambiopassword',
        component: NotificacioncambiopasswordComponent
      },
      {
        path: 'reenvioresetpassword',
        component: ReenvioresetpasswordComponent
      },
      {
        path: 'passwordreset/:token/:email',
        component: PasswordresetComponent
      }
    ]
  }
];
