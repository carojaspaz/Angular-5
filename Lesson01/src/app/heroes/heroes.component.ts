import { Component, OnInit } from '@angular/core';

//Import clases
import { Hero } from '../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  }

  constructor() { }

  ngOnInit() {
  }

}
