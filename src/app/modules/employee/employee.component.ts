import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from './services/employee.service';
import { Employee } from './employee.model';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  private employeeServiceSubs: Subscription = null;
  private gridData: Employee[] = [];
  public name: string = '';
  constructor(
    private employeeService: EmployeeService,
    private route: Router,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }

  ngOnDestroy() {
    if (this.employeeServiceSubs) {
      this.employeeServiceSubs.unsubscribe();
    }
  }

  public add() {
    this.route.navigate(['add']);
  }

  private loadEmployees() {
    this.loader.start();
    this.employeeServiceSubs = this.employeeService
      .getAllEmployees()
      .subscribe(response => {
        if (response) {
          this.gridData = response.data;
          this.loader.stop();
        }
      });
  }
}
