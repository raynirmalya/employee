import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JarvisToasterComponent } from './toaster.component';
import { JarvisToasterService } from './toaster.service';
import { JarvisToasterMockService } from '../../test-helpers/stub.service';

describe('JarvisToasterComponent', () => {
  let component: JarvisToasterComponent;
  let fixture: ComponentFixture<JarvisToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JarvisToasterComponent],
      providers: [ JarvisToasterService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JarvisToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    const service = TestBed.get(JarvisToasterService);
    component.toasterConfigs = [];
    service.show({message: 'test', type: 'success'});
    component.ngOnInit();
    expect(component.toasterConfigs.length).toBe(2);
  });
});
