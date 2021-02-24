import { Component, OnInit } from '@angular/core';
import { DiceRoller } from './dice-roller';
import { DiceRollerService } from '../service/dice-roller.service';
import { DiceRollerExpressionManagerService } from '../service/dice-roller-expression-manager.service';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit, DiceRoller {
  currentRoll: number | undefined;
  username: string | undefined;

  constructor(
    private rollerService: DiceRollerService,
    private expressionManagerService: DiceRollerExpressionManagerService){ }

  ngOnInit(): void {
  }

  rollDice(diceFace: number): void {
    console.log(diceFace);
    this.expressionManagerService.addToExpression(`d${diceFace}`);
    this.currentRoll = this.rollerService.roll(diceFace);
}



}
