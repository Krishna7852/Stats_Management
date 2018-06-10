import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DataService } from './services/data.service';
import { RegisterService } from './services/register.service';
import { TopBarService } from './services/top-bar.service';
import { AccordionModule } from 'ngx-bootstrap';
import { GRID_COMPONENTS } from './dashboard/ag-grid-renderers';
import { AgGridModule } from 'ag-grid-angular';
import { SessionStorageService } from './services/session-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(APP_ROUTES,{
      preloadingStrategy: PreloadAllModules
    }),
    FormsModule,
    DashboardModule,
    AppRoutingModule,
    AccordionModule.forRoot(),

  ],
  exports: [RouterModule],
  providers: [RegisterService, TopBarService, DataService, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
