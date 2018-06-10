import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Data_list } from '../sharedData/dataList';
import { Side_Menu } from '../sharedData/sideMenu';
import { Stats_List } from '../sharedData/statsList';

@Injectable()
export class DataService {

  constructor(){
  }

  public getMenu(): Observable<any[]> {
    return Observable.of(Side_Menu);
  }

  public getDataList(): Observable<any[]> {
    return Observable.of(Data_list);
  }

  public getStatsList(): Observable<any[]> {
    return Observable.of(Stats_List);
  }

}
