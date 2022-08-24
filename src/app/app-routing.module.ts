import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { NotfoundComponent } from './notfound/notfound.component';


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
    path: 'user',
    loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
