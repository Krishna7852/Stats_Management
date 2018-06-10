import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { LoginForm } from '../models/LoginForm';
import { Subscription } from 'rxjs/Subscription';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signInForm: LoginForm;
  public loggedInMessage: string;
  public loggedInError: string;
  public login$: Subscription;
  constructor(private _registerService: RegisterService,
              private _router: Router,
              private _sessionStorage: SessionStorageService) {
  }

  public ngOnInit() {
    this.signInForm = <LoginForm> {};
  }

  public onSumbit(form: LoginForm) {
   this.login$ = this._registerService.login(form)
      .subscribe((res) => {
        this.loggedInError = null;
        this.loggedInMessage = res;
        this._router.navigate(['/app']);
        this._sessionStorage.put('name', form.username);
      },
        (err) => {
        this.loggedInMessage = null;
        this.loggedInError = err;
        })
  }
}
