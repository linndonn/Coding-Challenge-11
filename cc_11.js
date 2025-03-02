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