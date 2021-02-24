import { Injectable } from '@angular/core';
//import { math } from '@types/mathjs';
import { DiceRollerService } from './dice-roller.service';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerExpressionManagerService {
  private expression: string | undefined;

  private scope: any = {
    "d20": 0,
    "d12": 0,
    "d10": 0,
    "d8": 0,
    "d6": 0,
    "d4": 0,
    "d99": 0
  };

  constructor(private diceRoller: DiceRollerService) { }

  public addToExpression(operand: string) {
    if (this.expression) {
      this.expression += operand;
    }
    else {
      this.expression += ` + ${operand}`;
    }

    this.scope[operand]++;
  }

  // issues with using the math global object
  executeExpression(): number {
    return 0;
    //return math.evaluate(this.expression, this.scope);
  }

  evaluateExpression(): boolean {

    return false;
  }
}

export enum Operations {
  ADD,
  SUBTRACE,
  MULTIPLY,
  DIVIDE
}
