

export class Book implements Displayable {
   
    constructor(
        private author: string, 
        private title: string, 
        private genre: Genre, 
        private cost: number) { }

    display(): string {
        return JSON.stringify(this);
    }
}

export interface Displayable {
    display(): string;
}

export enum Genre {
    Fantasy,
    NonFiction,
    ScienceFiction
}