import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { ColumnTemplateDirective } from '../../directives/column-template.directive';
import { UtilityService } from '../../services/utility.service';
import { Constants } from '../../constants/common.constants';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, AfterContentInit {
  @Input() field: string;
  @Input() title: string;
  @Input() width: string;
  public bodyTemplate: TemplateRef<any>;
  public headerTemplate: TemplateRef<any>;
  @ContentChildren(ColumnTemplateDirective) templates;
  constructor(public utilityService: UtilityService) {}

  ngOnInit() {}
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case Constants.BODY:
          this.bodyTemplate = item.template;
          break;
        case Constants.HEADER:
          this.headerTemplate = item.template;
          break;
        default:
          this.bodyTemplate = item.template;
          break;
      }
    });
  }
}
