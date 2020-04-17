import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { NumericDirective } from 'src/app/core/directives/numeric.directive';
import { MaterialModule } from 'src/app/core/shared/material.module';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { DatagridModule } from 'src/app/core/components/datagrid/datagrid.module';

@NgModule({
  declarations: [AddEditEmployeeComponent, EmployeeComponent, NumericDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    EmployeeRoutingModule,
    DatagridModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule {}
