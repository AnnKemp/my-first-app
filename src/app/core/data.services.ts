import { Injectable } from '@angular/core'; // importing the service, dus dit dient om 'services' te maken
import { HttpClient } from '@angular/common/http'; // this is for POST, GET, PUT, ... to get API's

import { Observable } from 'rxjs/Observable'; // symbols -> asink operations
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable() // this is a service and a decorator
export class DataService {

  baseUrl: string = 'assets/';

  constructor() { } // that allows dependency injection here in the contructor, so here we get the API's

  private handleError(error: any) {
  private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

  }
