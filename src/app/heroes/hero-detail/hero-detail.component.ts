import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      console.log(hero);
    });
  }

  updateHero() {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
