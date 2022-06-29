import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren:()=> import('./modules/features/dashboard/dashboard.module').then(m=>m.DashboardModule),
  },
  {
    path: 'properties',
    component: LayoutComponent,
    loadChildren:()=> import('./modules/features/properties/properties.module').then(m=>m.PropertiesModule),
  },
  {
    path: 'customers',
    component: LayoutComponent,
    loadChildren:()=> import('./modules/features/customers/customers.module').then(m=>m.CustomersModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
