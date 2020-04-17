import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeCreate } from '../employee.model';
import { ValidationMessageConstant } from 'src/app/core/constants/validation-message.constant';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessageConstant } from 'src/app/core/constants/message.constant';
import { JarvisToasterService } from 'src/app/core/components/toaster/toaster.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit, OnDestroy {
  public employeeDetails: EmployeeCreate = {} as EmployeeCreate;
  public inValidMessage: string = null;
  private employeeServiceSubs: Subscription = null;
  constructor(
    private employeeService: EmployeeService,
    private route: Router,
    private toast: JarvisToasterService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.employeeServiceSubs) {
      this.employeeServiceSubs.unsubscribe();
    }
  }
  private validation() {
    let valid = false;
    if (
      !(this.employeeDetails.name && this.employeeDetails.name.trim() !== '')
    ) {
      this.inValidMessage = ValidationMessageConstant.BLANK_NAME;
    } else if (
      !(
        this.employeeDetails.salary && this.employeeDetails.salary.trim() !== ''
      )
    ) {
      this.inValidMessage = ValidationMessageConstant.BLANK_SALARY;
    } else if (
      !(
        this.employeeDetails.age &&
        this.employeeDetails.age.toString().trim() !== ''
      )
    ) {
      this.inValidMessage = ValidationMessageConstant.BLANK_AGE;
    } else {
      valid = true;
    }
    if (!valid) {
      this.toast.show({ message: this.inValidMessage, type: {style: 'error'} });
    }
    return valid;
  }
  submit() {
    if (this.validation()) {
      this.loader.start();
      this.employeeServiceSubs = this.employeeService
        .create(this.employeeDetails)
        .subscribe(data => {
          if (data) {
            this.loader.stop();
            this.toast.show({ message: MessageConstant.EMPLOYEE_CREATE, type: {style: 'success'}  });
            this.route.navigate(['']);
          }
        });
    }
  }
}
