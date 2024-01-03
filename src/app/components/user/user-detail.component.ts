import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{
  user?: User;

  ngOnInit(): void {
    this.getUser();
  }
  constructor(private activatedRoute: ActivatedRoute,
              private requestService: RequestService ) {
  }
  getUser(){
    /*    console.log("project")*/
    this.activatedRoute.params.subscribe((value) => {

      let id = value['id'];
      // this.activatedRoute.params.subscribe((params) => {
      //   let id = params['id'];
      //   requestService.getUser(id).subscribe((res: User) => this.user = res);
      // });
      console.log(id)
      if(id){
        this.requestService.getUser(id).subscribe(
          (res) => {
            console.log(res.name)
            this.user = res;
          }
        );
      }
    })
  }
}
