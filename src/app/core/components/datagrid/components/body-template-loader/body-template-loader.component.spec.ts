import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTemplateLoaderComponent } from './body-template-loader.component';

describe('BodyTemplateLoaderComponent', () => {
  let component: BodyTemplateLoaderComponent;
  let fixture: ComponentFixture<BodyTemplateLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyTemplateLoaderComponent],
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTemplateLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnDestroy: view should be defined', () => {
    component.view = { context: {rowIndex: 0, rowData: null}, rootNodes: null, destroyed: false, destroy() {},
    markForCheck() {}, detach() {}, detectChanges() {}, reattach() {}, checkNoChanges() {}, onDestroy() {}};
    spyOn(component.view, 'destroy').and.callThrough();
    component.ngOnDestroy();
    expect(component.view.destroy).toHaveBeenCalledTimes(1);
  });

  it('ngOnChanges: view should be defined', () => {
    component.view = { context: {rowIndex: 0, rowData: null}, rootNodes: null, destroyed: false, destroy() {},
    markForCheck() {}, detach() {}, detectChanges() {}, reattach() {}, checkNoChanges() {}, onDestroy() {}};
    const changes = { rowIndex: { previousValue: 0, currentValue: 1, firstChange: true, isFirstChange() { return true; }}};
    component.rowIndex = 5;
    component.ngOnChanges(changes);
    expect(component.view.context.rowIndex).toBe(5);
  });
});
