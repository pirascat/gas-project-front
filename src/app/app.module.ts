import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataService } from './services/getDataService';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CardGasolineComponent } from './pages/dashboard-page/components/card-gasoline/card-gasoline.component';

import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldControl } from "@angular/material/form-field"

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    CardGasolineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [DataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
