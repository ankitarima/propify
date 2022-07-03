import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  customers = [] as any;
  sort = [] as any;
  display:boolean = false;
  displayDelete:boolean = false;
  detailsDisplay:boolean = false;
  calDate = new Date();

  items = [] as any;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.sort = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.items =  [
      {label: 'Edit'},
      {label: 'Staus',
          command: () => {
                this.changeStatus();
            },
       },
      {label: 'Delete',
          command: () => {
                this.delete();
            },
       }
    ];
  }

  ngOnInit(): void {
    this.http.get<any>('assets/mock/customers.json').subscribe((res: any) => {
      this.customers = res.data;
    });
  }

  delete(){
    this.displayDelete = true;
  }
  view(){
    this.display = false;
    this.detailsDisplay = true;
  }
  changeStatus(){
    this.detailsDisplay = false;
    this.display = true;
  }

}
