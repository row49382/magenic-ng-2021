"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
var BookRepository;
(function (BookRepository) {
    var BookRepo = /** @class */ (function () {
        function BookRepo(bookRepo) {
            this.bookRepo = bookRepo;
        }
        BookRepo.prototype.save = function (data) {
            this.bookRepo.push(data);
            return true;
        };
        BookRepo.prototype.getBooks = function () {
            return this.bookRepo;
        };
        return BookRepo;
    }());
    BookRepository.BookRepo = BookRepo;
})(BookRepository = exports.BookRepository || (exports.BookRepository = {}));
