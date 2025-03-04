//Task 1: Creating a Book Class

//Create a class Book with the following properties: title (string), author (string), isbn(number), copies(number)
class Book {
    constructor(title, author, isbn, copies) 
    {   this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };
    //Add a method getDetails() that returns a formatted string of book details.
    getDetails()
    {   return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; 
    };
    //Add a method updateCopies(quantity) that modifies the available copies when a book is borrowed or returned.
        updateCopies(quantity){ 
        this.copies += quantity; 
    };
};
//Test Data
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2 - Created Borrower Class

//Create a class Borrower with the following properties: name (string), borrowerId (number), borrowedBooks (array of borrowed book titles)
class Borrower {
    constructor(name, borrowerId) { 
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; //  an array of borrowed book titles
    };
    //Add a method borrowBook(book) that adds a book title to borrowedBooks
    borrowBook(book){ 
        this.borrowedBooks.push(book); 
    }
    //Add a method returnBook(book) that removes the book from borrowedBooks.
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); 
    }
};

    //Test Data
    const borrower1 = new Borrower("Alice Johnson", 201);
    borrower1.borrowBook("The Great Gatsby");
    console.log(borrower1.borrowedBooks);
    // Expected output: ["The Great Gatsby"]

    borrower1.returnBook("The Great Gatsby");
    console.log(borrower1.borrowedBooks);
    // Expected output: []


    //Task 3 - Created Library Class

    //Create a class Library with: books (array of Book instances), borrowers (array of Borrower instances)
    class Library {
        constructor(books, borrowers) {
            this.books = [];
            this.borrowers = [];
        
        }
    // Add methods: addBook(book): Adds a new book to the library.
    addBook(book) {
        this.books.push(book); 
    }
    // Add methods: listBooks(): Logs all books' details.
    listBooks() { 
        this.books.map(book => console.log(book.getDetails()));
    }
    

    //Task 4 - Implemented Book Borrowing
    lendBook(borrowerId, isbn) { 
        let book = this.books.find((bk) => bk.isbn === isbn); 
        let borrower = this.borrowers.find((br) => br.borrowerId === borrowerId); //Finding borrower by borrowerId using .find()
        if (!book) { 
            console.log(`Book not found via ISBN`); 
            return;
        } if (!borrower) { 
            console.log(`Borrower Information not found.`); 
            return;
        } if (book.copies > 0) { 
            book.updateCopies(-1); 
             } else { 
            console.log(`Book does not exist`) 
        };
    };
    //Task 5 - Implemented Book Returns
    returnBook(borrowerId, isbn) { //Add a method returnBook(borrowerId, ISBN)
        let book = this.books.find((book) => book.isbn === isbn); 
        let borrower = this.borrowers.find((br) => br.borrowerId === borrowerId); 
        if (!book) { 
            console.log(`Book does not exist.`); 
            return;
                } else {
            book.updateCopies(1); 
            borrower.returnBook(book); 
            
        }
    }
};


//Test Data
const library = new Library(); 
library.borrowers.push(borrower1); 
library.addBook(book1); 
library.listBooks(); 
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Test Data
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

//Test Data
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []