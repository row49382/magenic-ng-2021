"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookRepo_1 = require("./BookRepo");
console.log('Hello World');
var bookRepo = new BookRepo_1.BookRepository.BookRepo([]);
bookRepo.save(new Book_1.Book('Robert', 'Book1', Book_1.Genre.NonFiction, 10.0));
bookRepo.save(new Book_1.Book('James', 'Book2', Book_1.Genre.Fantasy, 12.30));
bookRepo.save(new Book_1.Book('Wroblewski', 'Book3', Book_1.Genre.ScienceFiction, 2.30));
var displayBooks = function (books) {
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        console.log(book.display());
    }
};
displayBooks(bookRepo.getBooks());
