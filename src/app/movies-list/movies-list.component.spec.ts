import { TestBed } from '@angular/core/testing';
import { MoviesListComponent } from './movies-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesListComponent', () => {

  let moviesListComponent: MoviesListComponent;

  beforeEach(
    () => {
      TestBed.configureTestingModule(
        {
          imports: [HttpClientModule],
          providers: [MoviesListComponent]
        }
      );
      moviesListComponent = TestBed.get(MoviesListComponent);
    }
  );  

  it('should create app', () => {
    expect(moviesListComponent).toBeTruthy();
  }
  );

  it('should dispaly correct title', () => {
    expect(moviesListComponent.title).toEqual('moviesListTestComponentTitle');
  }
  );
});


