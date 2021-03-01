import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movies-page",
  templateUrl: "./movies-page.component.html",
  styleUrls: ["./movies-page.component.css"]
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAll().subscribe(movies => (this.movies = movies));
  }
}
