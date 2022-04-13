import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/getDataService';
import { DataReceived } from 'src/models/dataReceived';
import { GasolineAveragePrices } from 'src/models/gasolineAveragePrices';

import { ChartDataset,ChartOptions } from 'chart.js';
import {FormGroup, FormControl} from '@angular/forms';

import { MatFormFieldControl } from "@angular/material/form-field"
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  private _subscription: Subscription[] = [];

  public data : GasolineAveragePrices[] = [];

  public ctx = 'myChart';

  constructor(
    private dataService : DataService,
    public datePipe     : DatePipe
  ) { }

  lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,1,1,1,1,1], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90,1,1,1,1,1], label: 'Product B' }
  ];

  lineChartLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  lineChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false
  };

  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this._subscription.push(
      this.dataService.get()
        .subscribe(
          (response : DataReceived) => {
            this.data = response.tableau;
            console.log("test",response)
          }
        )
    )
  }

  public onResetDate(): void {
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }
}
