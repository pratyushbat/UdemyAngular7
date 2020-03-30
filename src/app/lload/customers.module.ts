import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customers/Customer-component';
import { CustomersRoutingModule } from './customer-routing.module';
import { SiblingCustomer } from './customers/customer-sibling.ts/customer-sib';


@NgModule({
  declarations: [CustomerComponent,SiblingCustomer],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
