import { Book } from "./Book";


export module BookRepository {
    interface Savable<T> {
        save(data: T): boolean;
    }

    export class BookRepo implements Savable<Book> {
        constructor(private books: Array<Book>) { }

        save(data: Book): boolean {
            this.books.push(data);
            return true;
        }

        getBooks() {
            return this.books;
        }

    }
}
