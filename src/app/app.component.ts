import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {



  topMovies2023 = [
    {
      title: 'Oppenheimer',
      director: 'Christopher Nolan',
      releaseDate: '2023-07-21',
      genre: 'Biography/Drama',
      rating: 8.5,
      boxOffice: '$950 million'
    },
    {
      title: 'Barbie',
      director: 'Greta Gerwig',
      releaseDate: '2023-07-21',
      genre: 'Comedy/Fantasy',
      rating: 7.3,
      boxOffice: '$1.4 billion'
    },
    {
      title: 'Guardians of the Galaxy Vol. 3',
      director: 'James Gunn',
      releaseDate: '2023-05-05',
      genre: 'Action/Adventure',
      rating: 8.0,
      boxOffice: '$845 million'
    },
    {
      title: 'Spider-Man: Across the Spider-Verse',
      director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
      releaseDate: '2023-06-02',
      genre: 'Animation/Action',
      rating: 8.7,
      boxOffice: '$690 million'
    },
    {
      title: 'The Super Mario Bros. Movie',
      director: 'Aaron Horvath, Michael Jelenic',
      releaseDate: '2023-04-05',
      genre: 'Animation/Adventure',
      rating: 7.1,
      boxOffice: '$1.36 billion'
    },
    {
      title: 'John Wick: Chapter 4',
      director: 'Chad Stahelski',
      releaseDate: '2023-03-24',
      genre: 'Action/Thriller',
      rating: 7.8,
      boxOffice: '$440 million'
    },
    {
      title: 'Killers of the Flower Moon',
      director: 'Martin Scorsese',
      releaseDate: '2023-10-20',
      genre: 'Crime/Drama',
      rating: 8.0,
      boxOffice: '$156 million'
    }
  ]
  menuOptions: string[] = ['Home', 'About', 'Contact'];

}
