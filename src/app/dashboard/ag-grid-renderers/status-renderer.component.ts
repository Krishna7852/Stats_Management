import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-list-status',
  template: `
    <div class="status">
      <span [style.color]="rowData.isVerified ? '#1BB934': '#FF8A8A'">
        {{rowData.isVerified ? 'Verified&emsp;&emsp;': 'Unverified&ensp;&nbsp;'}}
        <i aria-hidden="true" class="fa fa-circle"></i></span>
    </div>`,
  styles: [`
    .status {
      font-size: 12px;
    }`]
})

export class StatusRendererComponent implements AgRendererComponent {
  public rowData: any;

  public refresh() {
    return false;
  }

  public agInit({data}) {
    this.rowData = data;
    console.log('row Data::', data);
  }
}
