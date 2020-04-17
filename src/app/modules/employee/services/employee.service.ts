import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/http-response.model';
import { environment } from 'src/environments/environment';
import { Employee, EmployeeCreate } from '../employee.model';
import { httpOptions } from 'src/app/core/services/http.constants';
import { UrlConstants } from 'src/app/core/constants/api-url.constant';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  create(
    employeeDetails: EmployeeCreate
  ): Observable<ApiResponse<EmployeeCreate>> {
    return this.http.post<ApiResponse<EmployeeCreate>>(
      `${environment.api}/${UrlConstants.CREATE}`,
      employeeDetails,
      httpOptions
    );
  }
  getAllEmployees(): Observable<ApiResponse<Employee[]>> {
    return this.http.get<ApiResponse<Employee[]>>(
      `${environment.api}/${UrlConstants.EMPLOYEES}`,
      httpOptions
    );
  }
}
