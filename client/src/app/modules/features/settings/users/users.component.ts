import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
