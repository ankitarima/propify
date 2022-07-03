import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SaleComponent } from './sale/sale.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  },
  {
    path: 'add',
    component: SaleComponent
  },
  {
    path: 'edit/:id',
    component: SaleComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
