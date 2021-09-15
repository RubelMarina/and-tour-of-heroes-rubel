import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MassagesService {
  massages: string[] = [];

  constructor() { }

  add(massage: string) {
    this.massages.push(massage);
  }

  clear() {
    this.massages = [];
  }
}
