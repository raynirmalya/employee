import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform: filter data according to the criteria', () => {
    const pipe = new SearchPipe();
    const arr = pipe.transform([{employee_name: 'nirmalya', employee_salary: '890890', employee_age: 61, profile_image: ''},
    {employee_name: 'aa', employee_salary: '78678', employee_age: 57, profile_image: ''} ], 'nir');
    expect(arr.length).toBe(1);
  });
  it('transform: filter data according to the criteria1', () => {
    const pipe = new SearchPipe();
    const arr = pipe.transform([{employee_name: 'nirmalya', employee_salary: '890890', employee_age: 61, profile_image: ''},
    {employee_name: 'aa', employee_salary: '78678', employee_age: 57, profile_image: ''} ], '');
    expect(arr.length).toBe(2);
  });
  it('transform: filter data according to the criteria2', () => {
    const pipe = new SearchPipe();
    const arr = pipe.transform(null, '');
    expect(arr.length).toBe(0);
  });
});
