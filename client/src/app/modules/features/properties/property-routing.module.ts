import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesComponent
  },
  {
    path: 'add',
    component: PropertyComponent
  },
  {
    path: 'edit',
    component: PropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
