import { NumericDirective } from './numeric.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('NumericDirective', () => {
  let fixture;
  let input: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [NumericDirective, TestComponent]
    }).createComponent(TestComponent);

    input = fixture.debugElement.query(By.directive(NumericDirective));
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    const directive = new NumericDirective(input);
    expect(directive).toBeTruthy();
  });

  it('should not allow character', () => {
    const event = new KeyboardEvent('input', {
      key: 'N'
    });
    input.nativeElement.dispatchEvent(event);
    expect(input.nativeElement.value).toEqual('23');
  });
});


@Component({
  template: `<input appNumeric value="ghjgh23" />`
})
class TestComponent { }
