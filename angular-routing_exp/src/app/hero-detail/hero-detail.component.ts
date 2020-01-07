import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { HeroService }  from '../hero-service/hero-service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  selectedId: number;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, 
    private heroService:HeroService) { }

  ngOnInit() {
   
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params:ParamMap) => this.heroService.getHero(params.get("id")))
    );
    
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
  

}
