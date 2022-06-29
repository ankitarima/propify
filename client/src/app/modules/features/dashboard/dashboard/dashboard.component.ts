import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public  data: any;
  public  options: any;

  customers = [] as any;
  sort = [] as any;

  constructor(private http: HttpClient) {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      };
      this.options = {
        title: {
            display: true,
            text: 'My Title',
            fontSize: 16
        },
        legend: {
            position: 'bottom'
        }
    };
    this.sort = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit(): void {
    this.http.get<any>('assets/mock/customers.json').subscribe((res:any)=>{
      this.customers = res.data;
    })
  }

  formatCurrency(value:any) {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

}
