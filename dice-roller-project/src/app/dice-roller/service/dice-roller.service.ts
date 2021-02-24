import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {
  constructor() { }

  roll(diceFace: number) : number {
    return Math.floor((Math.random() * diceFace) + 1);
  }
}
