import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public menuItems: any[];


  constructor(private sharedService: DataService,
              private _sessionStorage: SessionStorageService) {
  }

  public ngOnInit() {
    this.onSetMenu();
  }

  public onSetMenu(): void {
    this.sharedService.getMenu()
      .subscribe((items) => {
        this.menuItems = items;
      });
  }

  public onClick(menu) {
    if (menu.title !== 'Logout') {
      return;
    }
    this._sessionStorage.remove('name');
  }
}
