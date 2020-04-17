import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeeService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [EmployeeService],
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });

  it('getAllEmployees: should get expected result', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    service.getAllEmployees().subscribe(data => {
      expect(data.data.length).toEqual(1);
      expect(data.data[0].employee_age).toEqual(61);
    });
  });
  it('create: should create record', () => {
    const employee = { name: 'test', age: 57, salary: '123456' };
    const service: EmployeeService = TestBed.get(EmployeeService);
    service.create(employee).subscribe(data => {
      expect(data.data.name).toEqual('test');
      expect(data.data.age).toEqual(57);
    });
  });
});
