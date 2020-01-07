import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heros:Hero[];
  constructor(private heroServie: HeroService) { }

  ngOnInit() {
    this.getFavHeros();
  }

  /**
   * return only fav heros
   */
  getFavHeros():void {
    this.heroServie.getHeros().subscribe(heros => this.heros = heros.slice(0,3));
  }
}
