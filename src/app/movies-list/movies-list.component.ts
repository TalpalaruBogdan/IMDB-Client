import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieList } from '../MovieList';
import { MovieModel } from '../MovieModel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies = [];


  constructor(public mService: MovieService) { }

  ngOnInit() {
  }

  SearchTitle(term: string = "Avengers") {
    this.movies = [];
    this.mService.getMoviesByTitle(term).subscribe(
      data => {
        for (const d of (data.Search as MovieModel[])){
          this.movies.push({
            Title : d.Title,
            Year : d.Year,
            imdbID: d.imdbID,
            Type: d.Type,
            Poster: d.Poster,
          }            
          )
        }
      }
    );
  }

  provider = "API: Movie Database (IMDB Alternative), provided by RapidAPI";

 
}