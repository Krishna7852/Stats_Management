import { Component, OnInit } from '@angular/core';
import { TopBarService } from '../../services/top-bar.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public headerTitle = '';
  public username: string;
  constructor(private _topBarService: TopBarService,
              private _sessionStorage: SessionStorageService){
    this._actionEffect = this._actionEffect.bind(this);
  }

  public ngOnInit() {
    this.username = this._sessionStorage.value('name');
    this._topBarService.ChildComponentAction.subscribe(this._actionEffect);
  }

  private _actionEffect(data): void {
    this.headerTitle = data;
  }
}
