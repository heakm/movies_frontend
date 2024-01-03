import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./Pages/contact/contact.component";
import {UserDetailComponent} from "./components/user/user-detail.component";
import {MovieDetailComponent} from "./components/movie/movie-detail.component";

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'movies', loadChildren: () => import('./Pages/movies/movies.module').then(m => m.MoviesModule) },
  { path: 'users', loadChildren: () => import('./Pages/users/users.module').then(m => m.UsersModule)  },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: '**', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
