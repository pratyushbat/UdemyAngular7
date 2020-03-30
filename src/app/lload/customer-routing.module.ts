import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customers/Customer-component';
import { SiblingCustomer } from './customers/customer-sibling.ts/customer-sib';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    
  },
  {
      path: 'hel',
      component:SiblingCustomer

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }