import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  customers = [] as any;
  sort = [] as any;
  display:boolean = false;
  detailsDisplay:boolean = false;

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
    this.display = true;
  }
  details(){
    this.router.navigate(['sales','details','asd4a5s4d5d'])
  }

}
