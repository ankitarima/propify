import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-partners',
  templateUrl: './channel-partners.component.html',
  styleUrls: ['./channel-partners.component.css']
})
export class ChannelPartnersComponent implements OnInit {

  public display:boolean = false;
  public showBrokers:boolean = true;
  public displayUserform:boolean = false;
  public displayDelete:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    this.displayUserform = true;
  }
  editUser(){
    this.displayUserform = true;
  }

  deleteUser(){
    this.displayDelete = true;
  }

}
