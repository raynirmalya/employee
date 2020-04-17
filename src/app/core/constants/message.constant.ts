export class MessageConstant {
  public static get EMPLOYEE_CREATE(): string {
    return 'Employee Data Saved Successfully';
  }
}

import { NgxUiLoaderConfig } from 'ngx-ui-loader';

export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#04d712',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'cube-grid',
  blur: 5,
  delay: 0,
  fgsColor: '#04d712',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'three-strings',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#04d712',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 500
};
