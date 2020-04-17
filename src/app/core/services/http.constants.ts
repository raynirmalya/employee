import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json'
  })
};
