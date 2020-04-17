import {
  Component,
  OnInit,
  Input,
  EmbeddedViewRef,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-body-template-loader',
  templateUrl: './body-template-loader.component.html',
  styleUrls: ['./body-template-loader.component.css']
})
export class BodyTemplateLoaderComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input() column: any;
  @Input() rowData: any;
  @Input() rowIndex: any;
  view: EmbeddedViewRef<any>;
  constructor(public viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    if (this.column &&  this.column.bodyTemplate) {
      this.view = this.viewContainer.createEmbeddedView(
        this.column.bodyTemplate,
        {
          $implicit: this.column,
          rowData: this.rowData,
          rowIndex: this.rowIndex
        }
      );
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.view) {
      if (changes.rowIndex.previousValue !== changes.rowIndex.currentValue) {
        this.view.context.rowIndex = this.rowIndex;
      }
    }
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.destroy();
    }
  }
}
