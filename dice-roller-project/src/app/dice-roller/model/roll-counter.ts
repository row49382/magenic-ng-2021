export class RollCounter {
  rolls: Map<string, number>

  constructor() {
    this.rolls = new Map<string, number>();
    this.rolls.set("d20", 0);
    this.rolls.set("d12", 0);
    this.rolls.set("d10", 0);
    this.rolls.set("d8", 0);
    this.rolls.set("d7", 0);
    this.rolls.set("d6", 0);
    this.rolls.set("d5", 0);
    this.rolls.set("d4", 0);
    this.rolls.set("d100", 0);
    this.rolls.set("result", 0);
  }
}
