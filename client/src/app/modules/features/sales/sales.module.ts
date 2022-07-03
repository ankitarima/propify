import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { SaleComponent } from './sale/sale.component';
import { DetailsComponent } from './details/details.component';
import { SharedImportsModule } from '../../shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';



@NgModule({
  declarations: [
    SalesComponent,
    SaleComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedImportsModule
  ]
})
export class SalesModule { }
