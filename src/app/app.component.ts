import { HeroService } from './hero.service';
import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  h: Hero[];
  d: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
   getHeroes(): void {
    //  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
   }
   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
