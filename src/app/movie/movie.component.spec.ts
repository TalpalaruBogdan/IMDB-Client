import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {

  let movieComponent: MovieComponent;

  beforeEach(
    () => {
      TestBed.configureTestingModule(
        {
          imports: [HttpClientModule],
          providers: [MovieComponent]
        }
      );
      movieComponent = TestBed.get(MovieComponent);
    }
  );  

  it('should create app', () => {
    expect(movieComponent).toBeTruthy();
  }
  );

  it('should dispaly correct title', () => {
    expect(movieComponent.title).toEqual('moviesTestComponentTitle');
  }
  );
});


