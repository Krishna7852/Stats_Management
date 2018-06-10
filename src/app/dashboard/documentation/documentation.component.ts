import { Component, OnInit } from '@angular/core';
import { TopBarService } from '../../services/top-bar.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  public dummyImgUrl = 'https://bot-framework.azureedge.net/' +
    'bot-icons-v1/yourface_AuA1riCB79HnCoz6Nf45n3zjFsPFPm3LnAZ7uC6Ct2ioBnZ.png';
  constructor(private _topBarService: TopBarService) {
  }

  public ngOnInit() {
    this._topBarService.emitAction('documentation');
  }

}
