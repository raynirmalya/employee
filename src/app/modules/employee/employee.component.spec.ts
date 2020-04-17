import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { DatagridComponent } from 'src/app/core/components/datagrid/datagrid.component';
import { ColumnComponent, MatFormFieldComponent, MatLabelComponent, AppBodyTemplateLoaderComponent } from 'src/app/core/test-helpers/stub.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/components/datagrid/pipes/search.pipe';
import { EmployeeService } from './services/employee.service';
import { EmployeeMockServices, UtilityMockService } from 'src/app/core/test-helpers/stub.service';
import { UtilityService } from 'src/app/core/components/datagrid/services/utility.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPipe, EmployeeComponent, AppBodyTemplateLoaderComponent,
        DatagridComponent, ColumnComponent, MatLabelComponent, MatFormFieldComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [NgxUiLoaderService, {provide: EmployeeService, useValue: EmployeeMockServices},
        {provide: UtilityService, useValue: UtilityMockService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
