import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {HomeComponent} from './home/home.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {DataListComponent} from './data-list/data-list.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'documentation',
        component: DocumentationComponent
      },
      {
        path: 'data-list',
        component: DataListComponent
      },
    ]
  },
];
