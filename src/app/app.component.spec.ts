import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let appComponent: AppComponent;

  beforeEach(
    () => {
      TestBed.configureTestingModule(
        {
          imports: [],
          providers: [AppComponent]
        }
      );
      appComponent = TestBed.get(AppComponent);
    }
  );  

  it('should create app', () => {
    expect(appComponent).toBeTruthy();
  }
  );

  it('should dispaly correct title', () => {
    expect(appComponent.title).toEqual('IMDBClient');
  }
  );
});


