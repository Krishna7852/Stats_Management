import { Component, OnInit } from '@angular/core';
import { StatsList } from '../../constants/stats.constant';
import { ActionsRendererComponent, StatusRendererComponent } from '../ag-grid-renderers';
import { TopBarService } from '../../services/top-bar.service';
import { DataService } from '../../services/data.service';
import { ColDef, GridOptions } from 'ag-grid';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  public gridOptions: GridOptions;
  public gridApi: any;
  public listOfItems: StatsList[] = [];
  public columnDefs: ColDef[] = [
    {
      headerName: 'User',
      field: 'user.name',
      icons: {
        sortAscending: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
        sortDescending: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      }
    },
    {
      headerName: 'Purchase',
      field: 'purchase',
      icons: {
        sortAscending: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
        sortDescending: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      }
    },
    {
      headerName: 'Commision',
      field: 'commision',
      icons: {
        sortAscending: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
        sortDescending: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      }
    },
    {
      headerName: 'Earnings',
      field: 'earnings',
      icons: {
        sortAscending: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
        sortDescending: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      }
    },
    {
      headerName: 'Status',
      field: '',
      icons: {
        sortAscending: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
        sortDescending: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      },
      cellRendererFramework: StatusRendererComponent
    },
    {
      headerName: 'Date',
      field: 'date',
      icons: {
        sortAscending: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
        sortDescending: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      },
    },
    {
      headerName: 'Action',
      field: '',
      suppressSorting: true,
      cellRendererFramework: ActionsRendererComponent
    }
  ];

  constructor(private _topBarService: TopBarService,
              private _dataService: DataService) {
    this.onSetGridData();
    this.gridOptions = <GridOptions>{};
  }

  public ngOnInit() {
    this.initializeGrid();
    this._topBarService.emitAction('data');
  }

  public userSearch(query): void {
    /*
        TODO: call server side api to get search element by user
    */
    console.log('query:', query);
  }

  private initializeGrid(): void {
    this.gridOptions = {
      onGridSizeChanged: () => this.gridResize(),
      onViewportChanged: () => this.gridResize(),
      onGridReady: ({api}) => {
        this.gridApi = api;
        api.sizeColumnsToFit();
      },
      columnDefs: this.columnDefs,
      rowData: this.listOfItems,
      headerHeight: 50,
      rowHeight: 50,
      enableSorting: true,
      rowSelection: 'single',
      suppressCellSelection: true,
      rowDeselection: true,
    };
  }

  private onSetGridData(): void {
    this._dataService.getDataList().subscribe((items) => {
      this.listOfItems = items;
    }, (error) => {
      console.log('error while loading data::', error);
    });
  }

  private gridResize(): void {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();
    }
  }

  private onGridReady() {

  }
}
