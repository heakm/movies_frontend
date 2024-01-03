import { Component } from '@angular/core';
import {User} from "../../model/user";
import {RequestService} from "../../services/request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: User[] = [];
  user: User | undefined;
  constructor( private requestService: RequestService, private router: Router ) {
    this.getUsers();
  }
  getUsers() {
    this.requestService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  userDetail(_id: number) {
    this.requestService.getUser(_id).subscribe(
      (res: User) =>{
        this.router.navigate( ['user', _id] );
      },(err)=>{
        console.error(err)
      }
    )
  }
}
