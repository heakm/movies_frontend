import { Component } from '@angular/core';
import {User} from "../model/user";
import {ReqresService} from "../services/reqres.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: User[] = [];
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user._id)) + 1 : 11;
  }
  constructor( private reqresService: ReqresService ) {
    this.getUsers();
  }
  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
