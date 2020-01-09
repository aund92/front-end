import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css']
})
export class HeroesHomeComponent implements OnInit {
  heroes: Hero[];
  hero: Hero = new Hero();

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes,
      error => console.log(error)
    );
  }

  addHero(heroName: string) {
    heroName = heroName.trim();
    if (!heroName) {
      return;
    }

    this.hero.name = heroName;

    this.heroService.addHero(this.hero)
      .subscribe(hero => {
        console.log(hero);
        this.heroes.push(hero);
      });
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    // window.alert('deleteHero:' + hero.id);
    this.heroService.deleteHero(hero).subscribe();
  }

}
