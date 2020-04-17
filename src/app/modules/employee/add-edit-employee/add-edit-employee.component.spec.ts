import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeeComponent } from './add-edit-employee.component';
import { MatLabelComponent, MatFormFieldComponent } from 'src/app/core/test-helpers/stub.component';
import { EmployeeService } from '../services/employee.service';
import { EmployeeMockServices, JarvisToasterMockService } from 'src/app/core/test-helpers/stub.service';
import { JarvisToasterService } from 'src/app/core/components/toaster/toaster.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ValidationMessageConstant } from 'src/app/core/constants/validation-message.constant';

describe('AddEditEmployeeComponent', () => {
  let component: AddEditEmployeeComponent;
  let fixture: ComponentFixture<AddEditEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEmployeeComponent, MatLabelComponent, MatFormFieldComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [{provide: EmployeeService, useValue: EmployeeMockServices},
        {provide: JarvisToasterService, useValue: JarvisToasterMockService}, NgxUiLoaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validation: should check name validation', () => {
    component.employeeDetails = { name: '', salary: '12345', age: 34};
    const valid = component['validation']();
    expect(component.inValidMessage).toBe(ValidationMessageConstant.BLANK_NAME);
    expect(valid).toBeFalsy();
  });
  it('validation: should check salary validation', () => {
    component.employeeDetails = { name: 'test', salary: '', age: 34};
    const valid = component['validation']();
    expect(component.inValidMessage).toBe(ValidationMessageConstant.BLANK_SALARY);
    expect(valid).toBeFalsy();
  });
  it('validation: should check age validation', () => {
    component.employeeDetails = { name: 'test', salary: '12345', age: null};
    const valid = component['validation']();
    expect(component.inValidMessage).toBe(ValidationMessageConstant.BLANK_AGE);
    expect(valid).toBeFalsy();
  });
  it('validation: should be valid', () => {
    component.employeeDetails = { name: 'test', salary: '12345', age: 21};
    const valid = component['validation']();
    expect(valid).toBeTruthy();
  });

  it('submit: should be submitted succesfully', () => {
    spyOn(component['loader'], 'stop').and.callThrough();
    component.employeeDetails = { name: 'test', salary: '12345', age: 21};
    component.submit();
    expect(component['loader'].stop).toHaveBeenCalled();
  });
});
