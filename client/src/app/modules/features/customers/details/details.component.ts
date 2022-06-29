import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  products = [] as any;
  date = new Date();

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<any>('assets/mock/products.json').subscribe((res: any) => {
      this.products = res.data;
    });
  }

}
