import { Component, OnInit } from '@angular/core';
import { Stats } from '../../constants/stats.constant';
import { TopBarService } from '../../services/top-bar.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allStats: Stats[] = [];

  constructor(private _topBarService: TopBarService,
              private _dataService: DataService) {
  }

  public ngOnInit() {
    this._topBarService.emitAction('home');
    this.onInitialise();
  }

  public onInitialise(): void {
    this._dataService.getStatsList().subscribe((items) => {
      this.allStats = items;
    }, (error) => {
      console.log('error while loading stats List::', error);
    });
  }
}
