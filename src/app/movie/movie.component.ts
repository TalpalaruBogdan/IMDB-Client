import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../MovieModel';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  title = 'moviesTestComponentTitle'
  @Input() movie: MovieModel

  constructor() { }

  ngOnInit() {
  }

  getImdbLink(id: string) {
    return ('https://www.imdb.com/title/' + id);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  

}
