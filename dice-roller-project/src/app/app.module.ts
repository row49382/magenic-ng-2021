import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiceRollerDashboardComponent } from './dice-roller/dice-roller-dashboard/dice-roller-dashboard.component';
import { DiceRollerModule } from './dice-roller/dice-roller.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DiceRollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
