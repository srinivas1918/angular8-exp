import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location }  from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

   hero: Hero;


  id:number;

  constructor(private route:ActivatedRoute, private location:Location,private heroService:HeroService ) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id'); 
    this.id = Number(param);
    this.getHero(this.id);
    console.log(this.hero)
  }
  
  getHero(id:number): void {
    this.heroService.getHero(id).subscribe(h =>  this.hero = h);

  }
}
