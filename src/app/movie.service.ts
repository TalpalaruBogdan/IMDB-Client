import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieList } from './MovieList';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private baseUrl = "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=";
  output: MovieList;

  headerOptions = {
    headers: {
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "3f7917532emsh46d841b51c3dd48p125a95jsn19e668cbe0a4"
    }
  }

  constructor(private httpClient : HttpClient) { }

  getMoviesByTitle(title:string) {
    return this.httpClient.get<MovieList>(this.baseUrl + title, this.headerOptions);
  }

}
