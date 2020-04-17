export interface Employee {
  id?: string;
  employee_name: string;
  employee_salary: string;
  employee_age: number;
  profile_image?: string;
}

export interface EmployeeCreate {
  id?: string;
  name: string;
  salary: string;
  age: number;
}
