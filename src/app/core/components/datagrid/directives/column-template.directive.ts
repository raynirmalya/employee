import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appColumnTemplate]'
})
export class ColumnTemplateDirective {
  @Input() type: string;
  // tslint:disable-next-line: no-input-rename
  @Input('ColumnTemplate') templateName: string;
  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.templateName
      ? this.templateName.toUpperCase()
      : this.templateName;
  }
}
