import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };

  selectedHero: Hero;

  constructor() { 
    this.heroes = HEROES;
    this.selectedHero = {
      id: 0,
      name: 'Select a Hero!'
    }
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
