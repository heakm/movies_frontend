import { Component } from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Movie} from "../../model/movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  movie: Movie | undefined;
  movies: Movie[] = [];
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie._id)) + 1 : 11;
  }
  constructor( private requestService: RequestService, private router: Router ) {
    this.getMovies();
  }
  getMovies() {
    this.requestService.getMovies().subscribe(
      (res: Movie[]) => {
        this.movies = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  movieDetail(_id: number) {
    this.requestService.getMovie(_id).subscribe(
      (res:Movie) => {
        this.movie = res;
      },(err)=>{
        console.error(err);
      }
    )
  }
}
