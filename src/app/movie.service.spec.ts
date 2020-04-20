import { TestBed, async } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { MovieList } from './MovieList';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject } from '@angular/core';
import { AppModule } from './app.module';
import { MovieModel } from './MovieModel';
import { Observable } from 'rxjs';

describe('MovieService', () => {

  let movieService: MovieService;
  let results : MovieList;

  beforeEach(
    () => {
      TestBed.configureTestingModule(
        {
          imports: [HttpClientModule],
          providers: [MovieService]
        }
      );
      movieService = TestBed.get(MovieService);

    }
  );  

  it('should retrieve films', async () => {
    results = await movieService.getMoviesByTitle("test").toPromise();
    expect(results.Search.length).toBeGreaterThan(0);
  }
  );

  it('should return a title for every entry', async () => {
    results = await movieService.getMoviesByTitle("test").toPromise();
    results.Search.forEach(element => {
      expect(element.Title.length).toBeGreaterThan(0);
    });
  }
  );

  it('should return a poster for every entry', async () => {
    results = await movieService.getMoviesByTitle("test").toPromise();
    results.Search.forEach(element => {
      expect(element.Poster.length).toBeGreaterThan(0);
    });
  }
  );

  it('should return a imdbId for every entry', async () => {
    results = await movieService.getMoviesByTitle("test").toPromise();
    results.Search.forEach(element => {
      expect(element.imdbID.length).toBeGreaterThan(0);
    });
  }
  );

  it('should return a type for every entry', async () => {
    results = await movieService.getMoviesByTitle("test").toPromise();
    results.Search.forEach(element => {
      expect(element.Type.length).toBeGreaterThan(0);
    });
  }
  );

  it('should return a year for every entry', async () => {
    results = await movieService.getMoviesByTitle("test").toPromise();
    results.Search.forEach(element => {
      expect(element.Year.length).toBeGreaterThan(0);
    });
  }
  );

});


