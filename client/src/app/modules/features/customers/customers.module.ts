import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedImportsModule } from '../../shared/shared.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    CustomersComponent,
    CustomerComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedImportsModule
  ]
})
export class CustomersModule { }
