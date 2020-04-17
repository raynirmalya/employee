import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComponent } from './column.component';
import { UtilityService } from '../../services/utility.service';
import { UtilityMockService } from 'src/app/core/test-helpers/stub.service';

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnComponent],
      providers: [{ provide: UtilityService, useValue: UtilityMockService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngAfterContentInit: Body Template, Header Template should be defined', () => {
    // tslint:disable-next-line: max-line-length
    component.templates = [ { type: 'BODY', getType() { return 'BODY'; } , template: 'test' },
    { name: 'BODY', getType() { return 'HEADER'; } , template: 'test1' }, { getType() { return ''; }, template: 'test2' }];
    component.ngAfterContentInit();
    expect(component.bodyTemplate).toBeDefined();
    expect(component.headerTemplate).toBeDefined();
  });
});
