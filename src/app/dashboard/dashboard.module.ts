import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DataListComponent } from './data-list/data-list.component';
import { AccordionModule } from 'ngx-bootstrap';
import { GRID_COMPONENTS } from './ag-grid-renderers';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    AccordionModule.forRoot(),
    AgGridModule.withComponents([...GRID_COMPONENTS])
  ],
  declarations: [DashboardComponent,
    TopBarComponent,
    SideMenuComponent,
    HomeComponent,
    DocumentationComponent,
    DataListComponent,
    ...GRID_COMPONENTS
  ],
  providers: []
})
export class DashboardModule { }
