import { NgModule } from '@angular/core';
import { JarvisToasterComponent } from './toaster.component';
import { JarvisToasterService } from './toaster.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [JarvisToasterComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  providers: [JarvisToasterService],
  exports: [JarvisToasterComponent]
})
export class JarvisToasterModule {}
