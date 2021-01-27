import { Book } from "./Book";


export module BookRepository {
    interface Savable<T> {
        save(data: T): boolean;
    }

    export class BookRepo implements Savable<Book> {
        constructor(private bookRepo: Array<Book>) { }

        save(data: Book): boolean {
            this.bookRepo.push(data);
            return true;
        }

        getBooks() {
            return this.bookRepo;
        }

    }
}
