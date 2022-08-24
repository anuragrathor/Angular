import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpPasswordComponent } from './otp-password/otp-password.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    OtpPasswordComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule
  ]
})
export class UserAuthModule { }
