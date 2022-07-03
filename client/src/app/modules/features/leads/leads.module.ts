import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { SharedImportsModule } from '../../shared/shared.module';
import { LeadsComponent } from './leads/leads.component';
import { LeadComponent } from './lead/lead.component';


@NgModule({
  declarations: [
    LeadsComponent,
    LeadComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    SharedImportsModule
  ]
})
export class LeadsModule { }
