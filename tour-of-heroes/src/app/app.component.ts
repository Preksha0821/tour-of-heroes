import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(h: Hero): void {
    this.selectedHero = h;
  }

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
