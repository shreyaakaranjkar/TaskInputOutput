import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersInfo : string = 'This is User'
  @Output()sendUserData : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  sendUsersData(eve : Event){
    this.sendUserData.emit(this.usersInfo)
  }
}
