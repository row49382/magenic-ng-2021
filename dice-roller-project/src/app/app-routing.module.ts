import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceRollerComponent } from './dice-roller/dice-roller/dice-roller.component';
import { DiceRollerHistoryComponent } from './dice-roller/dice-roller-history/dice-roller-history.component';

const routes: Routes = [
  { path: 'roller', component: DiceRollerComponent },
  { path: 'history', component: DiceRollerHistoryComponent },
  { path: '', redirectTo: '/roller', pathMatch: 'full' },
  { path: '**', redirectTo: '/roller', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
