import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridComponent } from './datagrid.component';
import { MatLabelComponent, AppBodyTemplateLoaderComponent, MatFormFieldComponent } from '../../test-helpers/stub.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { UtilityService } from './services/utility.service';
import { UtilityMockService } from '../../test-helpers/stub.service';

describe('DatagridComponent', () => {
  let component: DatagridComponent;
  let fixture: ComponentFixture<DatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPipe, DatagridComponent, MatLabelComponent, AppBodyTemplateLoaderComponent, MatFormFieldComponent],
      imports: [FormsModule],
      providers: [{provide: UtilityService, useValue: UtilityMockService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridComponent);
    component = fixture.componentInstance;
    component.gridData = [{
      employee_name: 'test',
      employee_salary: '10000',
      employee_age: 61,
      profile_image: ''
    },{
      employee_name: 'Nirmalya',
      employee_salary: '10000',
      employee_age: 61,
      profile_image: ''
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setSort: should set sort configuration', () => {
    component.columnConfig = [{field: 'employee_name', sortable: true, title: 'Employee Name'}];
    component.sortingColStatus = {};
    component['setSort']();
    expect(component.sortingColStatus['employee_name']).toBe(0);
  });
  it('sortColumn: should sort ascending order', () => {
    component.columnConfig = [{field: 'employee_name', sortable: true, title: 'Employee Name'}];
    component.sortingColStatus = {};
    component['setSort']();
    component.sortable = true;
    component['sortColumn']('employee_name', null);
    expect(component.gridData[0]['employee_name']).toBe('Nirmalya');
  });
});
