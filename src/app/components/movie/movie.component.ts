import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input('index')
  index!: number;

  @Input('movie')
  movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
