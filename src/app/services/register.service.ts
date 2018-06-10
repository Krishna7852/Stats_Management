import { Injectable } from '@angular/core';
import { LoginForm } from '../auth/models/LoginForm';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RegisterService {

  private validationMessage = {
    success: 'You are successfully logged In',
    error: 'Authentication Problem.'
  };
  constructor() {

  }

  public register(data: LoginForm): Observable<any> {
     return Observable.of(this.validationMessage.success)
  }

  public login(data: LoginForm): Observable<any> {
    if(data.username === 'test') {
      return Observable.of(this.validationMessage.success)
    }
    return Observable.throw(this.validationMessage.error)
  }
}
