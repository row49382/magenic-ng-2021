import { Component, OnInit, Input } from '@angular/core';
import { RollCounter } from '../model/roll-counter';
import { DiceRollerUserCounterService } from '../service/dice-roller-user-counter.service';

@Component({
  selector: 'app-dice-roller-history',
  templateUrl: './dice-roller-history.component.html',
  styleUrls: ['./dice-roller-history.component.css']
})
export class DiceRollerHistoryComponent implements OnInit {
  currentUser: string = 'robertw';
  page: number = 1;
  collectionSize: number = 0;
  maxSize: number = 10;

  constructor(private userDiceCounter: DiceRollerUserCounterService) { }

  ngOnInit(): void {
  }

  getRolls(): Array<RollCounter> {
    //debugger;
    let userRollCounter = this.userDiceCounter.userRolls.get(this.currentUser);
    console.log('DiceRollerHistoryComponent: ', userRollCounter);

    if (userRollCounter) {
      console.log('DiceRollerHistoryComponent: ', userRollCounter);
      this.collectionSize = userRollCounter.length;
      return userRollCounter;
    }

    return [];
  }
}
