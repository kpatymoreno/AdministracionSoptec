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
    SignupComponent
  ]
})
export class AuthenticationModule {}
