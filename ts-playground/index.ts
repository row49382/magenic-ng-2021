import { Book, Genre } from "./Book";
import { BookRepository } from "./BookRepo";

console.log('Hello World');

let bookRepo: BookRepository.BookRepo = new BookRepository.BookRepo([]);
bookRepo.save(new Book('Robert', 'Book1', Genre.NonFiction, 10.0));
bookRepo.save(new Book('James', 'Book2', Genre.Fantasy, 12.30));
bookRepo.save(new Book('Wroblewski', 'Book3', Genre.ScienceFiction, 2.30));

const displayBooks = (books: Book[]) => {
    for (let book of books) {
        console.log(book.display());
    }   
};

displayBooks(bookRepo.getBooks());
