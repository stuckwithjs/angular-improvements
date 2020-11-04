import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { tap } from 'rxjs/operators';
import * as mockData from '../assets/mockData.json';
import { Response } from './models/Response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private report: Response = mockData;
  constructor() {}

  getItems(): Observable<Response> {
    return of(mockData.default as Response).pipe(tap((v) => console.log(v)));
  }
}
