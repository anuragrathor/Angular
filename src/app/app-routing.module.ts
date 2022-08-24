import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '404', component: NotfoundComponent
  },
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
