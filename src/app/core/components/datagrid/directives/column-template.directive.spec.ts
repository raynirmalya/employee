import { ColumnTemplateDirective } from './column-template.directive';
import { TemplateRef } from '@angular/core';

describe('ColumnTemplateDirective', () => {
  it('should create an instance', () => {
    const directive = new ColumnTemplateDirective({
      createEmbeddedView: () => null,
      elementRef: null
    });
    expect(directive).toBeTruthy();
  });
});
