import { BehaviorSubject } from 'rxjs';
import { Toaster } from './toaster.model';
import { Injectable } from '@angular/core';
@Injectable()
export class JarvisToasterService {
  private reqrConf = new BehaviorSubject<Toaster>(null);
  showToaster = this.reqrConf.asObservable();
  show(toaster: Toaster) {
    this.reqrConf.next(toaster);
    return this;
  }
}
