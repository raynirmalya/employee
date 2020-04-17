import { ElementRef } from '@angular/core';

export interface Toaster {
  content?: ElementRef;
  animation?: {
    type: string;
    duration: string;
  };
  type?: { style: string };
  message: string;
}
