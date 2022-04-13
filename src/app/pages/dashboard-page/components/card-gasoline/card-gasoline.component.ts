import { Component, Input, OnInit } from '@angular/core';
import { GasolineAveragePrices } from 'src/models/gasolineAveragePrices';

@Component({
  selector: 'app-card-gasoline',
  templateUrl: './card-gasoline.component.html',
  styleUrls: ['./card-gasoline.component.css']
})
export class CardGasolineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public gasolineData : GasolineAveragePrices = 
  {
    name : "",
    averagePrice : 0,
    numberPrices : 0
  }

}
