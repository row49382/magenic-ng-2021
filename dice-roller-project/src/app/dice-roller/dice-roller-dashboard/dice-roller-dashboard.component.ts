import { Component, OnInit } from '@angular/core';
import { DiceRollerService } from '../service/dice-roller.service';
import { DiceRoller } from '../dice-roller/dice-roller';
import { DiceRollerExpressionManagerService } from '../service/dice-roller-expression-manager.service';

@Component({
  selector: 'app-dice-roller-dashboard',
  templateUrl: './dice-roller-dashboard.component.html',
  styleUrls: ['./dice-roller-dashboard.component.css']
})
export class DiceRollerDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
