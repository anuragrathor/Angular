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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
