import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "./movie";

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Movie[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
