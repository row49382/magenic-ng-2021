import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollerHistoryComponent } from './dice-roller-history/dice-roller-history.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { FormsModule } from '@angular/forms';
import { DiceRollerOptionsComponent } from './dice-roller-options/dice-roller-options.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DiceRollerHistoryComponent,
    DiceRollerComponent,
    DiceRollerOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DiceRollerHistoryComponent,
    DiceRollerComponent,
    DiceRollerOptionsComponent
  ]
})
export class DiceRollerModule { }
