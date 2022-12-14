import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   //Toaster Module
import { ToastrModule } from 'ngx-toastr';                                        // Toaster Module
import { NgxUiLoaderModule } from "ngx-ui-loader";                                //Loader Module
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProperCasePipe } from './_utils/pipes/propercase.pipe';
import { CPDefaultThemeDirective }  from './_utils/directives/cp-default-theme.directive';
import { CPCustomThemeDirective }  from './_utils/directives/cp-custom-theme.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    SignupComponent,
    LoginComponent,
    ProperCasePipe,
    CPDefaultThemeDirective,
    CPCustomThemeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    BrowserAnimationsModule, // required animations module
    //ToastrModule.forRoot(), // Normal ToastrModule added
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      }),                      // Customized ToastrModule added
    NgxUiLoaderModule,         //LoaderModule Added
    AppRoutingModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
