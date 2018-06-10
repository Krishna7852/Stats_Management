import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class TopBarService {

  @Output()
  public ChildComponentAction: EventEmitter<any> = new EventEmitter();

  public emitAction(data) {
    this.ChildComponentAction.emit(data);
  }

}
