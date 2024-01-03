import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../model/movie";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = 'http://localhost:3000';
  user?:Observable<User>;
  constructor( private http: HttpClient ) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"/users");
  }
  getUser( id: number ): Observable<User> {
    const url = `${this.url}/users/${id}`;
    console.log("User url: "+url)
    this.user = this.http.get<User>(url);
    console.log(this.user)
    return this.http.get<User>(url);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url+"/movies");
  }
  getMovie( id: number ): Observable<Movie> {
    const url = `${this.url}/movies/${id}`;
    console.log("Movie url: "+url);
    return this.http.get<Movie>(url);
  }
}
