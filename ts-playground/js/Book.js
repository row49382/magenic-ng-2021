"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(author, title, genre, cost) {
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.cost = cost;
    }
    Book.prototype.display = function () {
        return JSON.stringify(this);
    };
    return Book;
}());
exports.Book = Book;
var Genre;
(function (Genre) {
    Genre[Genre["Fantasy"] = 0] = "Fantasy";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["ScienceFiction"] = 2] = "ScienceFiction";
})(Genre = exports.Genre || (exports.Genre = {}));
