import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {
    path: '',
    component: LeadsComponent
  },
  {
    path: 'add',
    component: LeadComponent
  },
  {
    path: 'edit/:id',
    component: LeadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
