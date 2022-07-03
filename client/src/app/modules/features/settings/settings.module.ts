import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingComponent } from './setting/setting.component';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { ChannelPartnersComponent } from './channel-partners/channel-partners.component';
import { ProjectComponent } from './project/project.component';
import { RouterModule } from '@angular/router';
import { SharedImportsModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SettingComponent,
    UsersComponent,
    SalesComponent,
    ChannelPartnersComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SettingsRoutingModule,
    SharedImportsModule
  ]
})
export class SettingsModule { }
