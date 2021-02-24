import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollerDashboardComponent } from './dice-roller-dashboard/dice-roller-dashboard.component';
import { DiceRollerHistoryComponent } from './dice-roller-history/dice-roller-history.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DiceRollerDashboardComponent,
    DiceRollerHistoryComponent,
    DiceRollerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DiceRollerDashboardComponent
  ]
})
export class DiceRollerModule { }
