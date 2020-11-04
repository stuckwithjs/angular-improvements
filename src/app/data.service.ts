import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import mockData from '../assets/mockData.json';
import { Response } from './models/Response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getItems(): Observable<Response> {
    console.log(mockData);
    return of(mockData as Response);
  }
}
