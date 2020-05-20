import { Component, OnInit } from '@angular/core';
import { Album } from './album';


@Component({
  selector: 'app-dyskografia',
  templateUrl: './dyskografia.component.html',
  styleUrls: ['./dyskografia.component.css'],
})
export class DyskografiaComponent implements OnInit {

  albums: Album[] = [
    {
      title: 'To nie był Wilk',
      year: '2004',
      tracklist: ['Intro',
        'Chochlik Smyrałka',
        'Bo jo cie kochom (De Press cover)',
        'Zając Poziomka 666 (Fasolki cover)',
        'Heavy Glass (Death Cap)']
    },
    {
      title: 'Dwa Hektary Żywego Lasu',
      year: '2006',
      tracklist: ['Intro',
        'Klnijmy Się na Słońce',
        'Pieśń o Rycerzu z Czantorii',
        'Baba Jaga',
        'Ogień Zywy Niczym Krew',
        'Samotny Taniec Utopca',
        'Tam Skąd Pochodzę',
        'Kwiat Paproci',
        'Czego Szukam',
        'Piwny Berserk',
        'Wooden Pints (Korpiklaani Cover)']
    },
    {
      title: 'W Cieniu Wielkiego Dębu',
      year: '2008',
      tracklist: ['W Cieniu Wielkiego Dębu',
        'Dar Czarnego Licha',
        'Niechaj Stanie Się Dzień',
        'Sława i Cześć',
        'Mara',
        'Sen',
        'Tam Po Drugiej Stronie',
        'Utracone Marzenia',
        'Legęndy Ślad',
        'Oczekując Syna Boga Chmur',
        'Halny',
        'Odwet',
        'Tym Którzy Odeszli',
        'Trybut'
      ]
    },
    {
      title: 'Dark Side Of The Forest',
      year: '2012',
      tracklist: ['Baba Yaga Is Coming',
        'Watra',
        'Not for War',
        'Remember My Name (Warrior’s Farewell Song)',
        'Burn in Cold Hell',
        'Radogost',
        'Rage, Hate and Faith',
        'Still Against the World (Mercenary’s Song)',
        'From the Dark',
        'Deadly Race Trilogy',
        'Bonus Track'
      ]
    },
    {
      title: 'Dziedzictwo Gór',
      year: '2015',
      tracklist: ['Na Dnie Wielkiej Góry',
        'Raróg',
        'Idę Wśrod Gwiazd',
        'To Płynie w Twojej Krwi',
        'Pożoga',
        'Ponad Głębiami Czarnych Wód',
        'Czarne Xęstwo',
        'W Sercu Burzy',
        'Ananke',
        'Słowa ze Stali',
        'Dziedzictwo',
        'Dalej Wprost Przed Siebie'
      ]
    },
    {
      title: 'Przeklęty',
      year: '2018',
      tracklist: ['Ten Swiat Dziś Spłonie',
        'Meduza',
        'Przeklęty',
        'Widma',
        'Kiedy Cię Moje Oplotą Sny',
        'Exmara',
        'Wśród Ruin Tej Wieży',
        'Tylko Smierć'
      ]
    },
  ];


  constructor() { }

  ngOnInit(): void { }



}
