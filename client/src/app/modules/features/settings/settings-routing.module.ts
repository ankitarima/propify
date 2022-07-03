import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelPartnersComponent } from './channel-partners/channel-partners.component';
import { ProjectComponent } from './project/project.component';
import { SalesComponent } from './sales/sales.component';
import { SettingComponent } from './setting/setting.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children:[
      {
        path:'project',
        component:ProjectComponent
      },
      {
        path:'channel-partners',
        component:ChannelPartnersComponent
      },
      {
        path:'sales',
        component:SalesComponent
      },
      {
        path:'users',
        component: UsersComponent
      },
      { path: '', redirectTo: 'project', pathMatch: 'full'},
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
