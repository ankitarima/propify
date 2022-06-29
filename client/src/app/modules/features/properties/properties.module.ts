import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './property/property.component';
import { PropertyRoutingModule } from './property-routing.module';
import { SharedImportsModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule,
    SharedImportsModule,
    PropertyRoutingModule
  ]
})
export class PropertiesModule { }
