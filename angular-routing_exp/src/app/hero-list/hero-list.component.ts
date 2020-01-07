import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero-service/hero-service';
import { ActivatedRoute } from '@angular/router'
import { Hero } from '../hero';
import { switchMap } from 'rxjs/operators';
import { Observable, VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$:Observable<Hero[]>;
  selectedId:number;
  constructor(private heroService: HeroService, private router:ActivatedRoute) { }


  ngOnInit() {
  
    
    this.heroes$ = this.router.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get("id");
       return this.heroService.getHeroes();
      })
    );
  }

}
