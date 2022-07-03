import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  items:any = [];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Project',
        routerLink: '/settings/project'
      },
      {
        label: 'Channel Partners',
        routerLink: '/settings/channel-partners'
      },
      {
        label: 'Sales',
        routerLink: '/settings/sales'
      },
      {
        label: 'Users',
        routerLink: '/settings/users'
      },
  ];
  }

}
