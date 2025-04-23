import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    DatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  nbaGames = [
    {
      title: 'NBA Game 1',
      date: '2023-10-01',
      time: '20:00',
      homeTeam: 'Lakers',
      awayTeam: 'Warriors',
      homeScore: 102,
      awayScore: 98,
    },
    {
      title: 'NBA Game 2',
      date: '2023-10-02',
      time: '21:00',
      homeTeam: 'Celtics',
      awayTeam: 'Nets',
      homeScore: 110,
      awayScore: 105,
    },
    {
      title: 'NBA Game 3',
      date: '2023-10-03',
      time: '22:00',
      homeTeam: 'Bulls',
      awayTeam: 'Heat',
      homeScore: 95,
      awayScore: 100,
    },
    {
      title: 'NBA Game 4',
      date: '2023-10-04',
      time: '23:00',
      homeTeam: 'Suns',
      awayTeam: 'Mavericks',
      homeScore: 120,
      awayScore: 115,
    },
    {
      title: 'NBA Game 5',
      date: '2023-10-05',
      time: '20:30',
      homeTeam: 'Bucks',
      awayTeam: '76ers',
      homeScore: 108,
      awayScore: 110,
    },
    {
      title: 'NBA Game 6',
      date: '2023-10-06',
      time: '21:30',
      homeTeam: 'Clippers',
      awayTeam: 'Nuggets',
      homeScore: 115,
      awayScore: 112,
    },
    {
      title: 'NBA Game 7',
      date: '2023-10-07',
      time: '22:30',
      homeTeam: 'Rockets',
      awayTeam: 'Grizzlies',
      homeScore: 98,
      awayScore: 100,
    }


  ]
}
