import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  public showFinalPriceInput:boolean = false;
  public calDate = new Date();

  public selectedValue:any;

  constructor() { }

  ngOnInit(): void {
  }

  public calculatePrice(){
    this.showFinalPriceInput = true;
  }

}
