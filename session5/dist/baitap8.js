"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    updateInfo(newTitle, newAuthor) {
        this.title = newTitle;
        this.author = newAuthor;
    }
}
class Library {
    books;
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có id: ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có id: ${id}`);
        }
    }
    searchBooksByTitle(keyword) {
        const foundBooks = this.books.filter(b => b.title.toLowerCase().includes(keyword.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            foundBooks.forEach(b => {
                console.log(`- ID: ${b.getId()}, Title: ${b.title}, Author: ${b.author}`);
            });
        }
        else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}".`);
        }
    }
    printBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`- ID: ${b.getId()}, Title: ${b.title}, Author: ${b.author}`);
        });
    }
}
const library = new Library();
library.addBook(new Book("B01", "Lập trình JS", "Nguyễn Văn A"));
library.addBook(new Book("B02", "Học TypeScript", "Trần Thị B"));
library.addBook(new Book("B03", "TypeScript Nâng Cao", "Lê Văn C"));
library.printBooks();
console.log("\n-- Tìm sách có chữ 'TypeScript' --");
library.searchBooksByTitle("TypeScript");
console.log("\n-- Tìm sách có chữ 'Python' --");
library.searchBooksByTitle("Python");
//# sourceMappingURL=baitap8.js.map