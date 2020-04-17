import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './components/column/column.component';
import { ColumnTemplateDirective } from './directives/column-template.directive';
import { BodyTemplateLoaderComponent } from './components/body-template-loader/body-template-loader.component';
import { UtilityService } from './services/utility.service';
import { DatagridComponent } from './datagrid.component';
import { SearchPipe } from './pipes/search.pipe';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatagridComponent,
    ColumnComponent,
    ColumnTemplateDirective,
    BodyTemplateLoaderComponent,
    SearchPipe
  ],
  imports: [CommonModule, MaterialModule, FormsModule],
  providers: [UtilityService],
  exports: [
    DatagridComponent,
    ColumnComponent,
    ColumnTemplateDirective,
    BodyTemplateLoaderComponent,
    SearchPipe
  ]
})
export class DatagridModule {}
