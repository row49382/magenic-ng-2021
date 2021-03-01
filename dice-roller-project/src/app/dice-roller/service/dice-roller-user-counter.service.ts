import { Injectable } from '@angular/core';
import { RollCounter } from '../model/roll-counter';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerUserCounterService {
  userRolls: Map<string, Array<RollCounter>>

  constructor() {
    this.userRolls = new Map<string, Array<RollCounter>>();
  }

  add(username: string, diceFace: string, roll: number) {
    let rolls = this.userRolls.get(username);
    if (!rolls) {
      rolls = new Array<RollCounter>();
      this.userRolls.set(username, rolls);
    }

    let rollCounter = new RollCounter();
    rollCounter.rolls.set(diceFace, 1);
    rollCounter.rolls.set('result', roll);

    rolls.push(rollCounter)
    this.userRolls.set(username, rolls);
  }
}
