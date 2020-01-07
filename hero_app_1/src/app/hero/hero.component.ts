import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROS } from '../mock.heros';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title = "My Hero";
  heros = [];
  selectedHero:Hero;


  constructor(private heroService: HeroService) { 
   
  }

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

  getHeros():void{
    this.heroService.getHeros().subscribe(heros => this.heros = heros);
  }

}
