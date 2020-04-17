import { of } from 'rxjs';
import { Toaster } from '../components/toaster/toaster.model';

export const EmployeeMockServices = {
  create() {
    return of({
      status: 'success',
      data: { name: 'test', age: 57, salary: '123456', id: 23 }
    });
  },
  getAllEmployees() {
    return of({
      status: 'success',
      data: [
        {
          emplyee_name: 'test',
          employee_salary: '10000',
          employee_age: 61,
          profile_image: ''
        }
      ]
    });
  }
};

export const UtilityMockService = {
  uuid() {
    return 'c8d36031-da35-4dfe-89b3-ed1e581595fc';
  }
};

export const JarvisToasterMockService = {
  show(toaster: Toaster) {
    return of(toaster);
  }
};




