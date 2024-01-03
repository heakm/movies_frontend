import {Movie} from "./movie";

export interface User{
  _id: number;
  name: string;
  gender: string;
  age: number;
  occupation: string;
  movies: Movie[];
}
