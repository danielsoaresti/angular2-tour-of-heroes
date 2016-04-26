import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
         this.getHeroes();
    }
    
    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }
    
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    onSelect (hero: Hero) 
    {
        this.selectedHero = hero; 
    }

    gotoDetail(hero: Hero) {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}