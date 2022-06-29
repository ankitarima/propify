import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuModule} from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  mainNavItems: MenuItem[] = [];
  userNavItems: MenuItem[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.authService.getUser())
    this.mainNavItems = [
      {
        label: 'Properties',
        routerLink: ['/properties']
      },
      {
        label: 'Customers',
        routerLink: ['/customers']
      },
      {
        label: 'Billings',
        routerLink: ['/']
      },
      {
        label: 'Leads',
        routerLink: ['/']
      },
      {
        label: 'Settings',
        routerLink: ['/']
    }
    ];
    this.userNavItems = [
      {
        label: 'Profile'
      },
      {
        label: 'Log Out'
      }
    ];
  }

}
