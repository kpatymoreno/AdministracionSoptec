import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { ReenvioresetpasswordComponent } from './reenvioresetpassword/reenvioresetpassword.component';

import { ReenvioactivacionComponent } from './reenvioactivacion/reenvioactivacion.component';
import { NotificacionactivacionComponent } from './notificacionactivacion/notificacionactivacion.component';
import { ActivationaccountComponent } from './activationaccount/activationaccount.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';

import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';


import { AuthenticationRoutes } from './authentication.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificacioncambiopasswordComponent } from './notificacioncambiopassword/notificacioncambiopassword.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    ActivationaccountComponent,
    NotificacionactivacionComponent,
    ReenvioactivacionComponent,
    NotificacioncambiopasswordComponent,
    ReenvioresetpasswordComponent,
    PasswordresetComponent
  ]
})
export class AuthenticationModule {}
