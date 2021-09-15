import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MassagesService} from "./massages.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MassagesService) {

  }

  getHeroes (): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService fetched heroes');
    return heroes;
  }
}
