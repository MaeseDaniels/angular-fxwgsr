import {Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import { HEROES } from '../mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  auxHeroName: string;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.auxHeroName = this.selectedHero.name;
  }

  changeHeroName(): void {
    this.selectedHero.name = this.auxHeroName;
    this.cancelSelection();
  }

  cancelSelection(): void {
    this.selectedHero = null;
  }
  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit() {
    //this.selectedHero = this.heroes[0];
  }
}