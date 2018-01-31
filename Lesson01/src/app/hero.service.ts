import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//Import Clases
import { Hero } from './entities/Hero';
import { HEROES } from './entities/mocks/mock-heroes';

//Import Servicios
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]>{
    this.messageService.add("HeroServices: fetched heroes");
    return of (HEROES);
  }
}
