import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MoviesPageComponent } from "./movies-page/movies-page.component";
import { MovieService } from "./movie.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, MoviesPageComponent],
  bootstrap: [AppComponent],
  providers: [MovieService]
})
export class AppModule {}
