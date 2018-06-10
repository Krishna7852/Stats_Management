import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-list-action',
  template: `
    <div class="icons">
      <span class="edit">
        <i [attr.title]="'Click to delete'" class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
      <span class="delete">
        <i [attr.title]="'Click to edit'" class="fa fa-trash-o" aria-hidden="true"></i></span>
    </div>`,
  styles: [`
    .icons {
      cursor: pointer;
      display: flex;
    }

    .edit {
      color: #1790e6;
      padding-right: 50px;
    }`]
})

export class ActionsRendererComponent implements AgRendererComponent {

  public refresh() {
    return false;
  }

  public agInit() {
    // here we get row data
  }
}
