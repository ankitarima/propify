import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  customers = [] as any;
  sort = [] as any;
  display:boolean = false;
  detailsDisplay:boolean = false;

  items = [] as any;

  constructor(private http: HttpClient) {
    this.sort = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.items =  [
      {label: 'Edit'},
      {label: 'Change Status',
          command: () => {
                this.statusChange();
            },
       },
      {label: 'Delete'}
    ];
  }

  ngOnInit(): void {
    this.http.get<any>('assets/mock/customers.json').subscribe((res: any) => {
      this.customers = res.data;
    });
  }

  statusChange(){
    this.display = true;
  }
  details(){
    this.detailsDisplay = true;
  }

}
