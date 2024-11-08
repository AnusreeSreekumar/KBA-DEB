const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const booklib = new Map();

function askCommand() {

    console.log("\nWelcome to Book Manage Inventory");
    console.log("\nChoose a command: add, remove, search, update, summary, exit");
    rl.question("\nEnter a command: ", function (command) {

        switch (command.trim().toLowerCase()) {

            case 'add':
                addBookPrompt();
                break;
            case 'remove':
                removeBookPrompt();
                break;
            case 'search':
                searchBookPrompt();
                break;
            case 'update':
                updateBookPrompt();
                break;
            case 'summary':
                printSummary();
                askCommand();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log("Please enter a valid command");
                askCommand();
                break;
        }
    });
}

askCommand()

function addBookPrompt() {

    rl.question("\nEnter the book ID: ", function (id) {
        rl.question("Enter the book title: ", function (title) {
            rl.question("Enter the author's name: ", function (author) {
                rl.question("Enter the genre of the book: ", function (genre) {
                    addBook(id, title, author, genre);
                    askCommand();
                });
            });
        });
    });
}

function addBook(id, title, author, genre) {

    if (booklib.has(id)) {
        console.log(`\nError: Book with ID ${id} is already present`);
    }
    else {
        booklib.set(id, {title, author, genre});
        console.log(`\nBook with ID ${id} is added to the library`);
    }
}

function removeBookPrompt() {

    rl.question("\nEnter the ID of the book to be removed: ", function (id) {
        removeBook(id);
        askCommand();
    });
}

function removeBook(id) {

    if (booklib.has(id)) {
        booklib.delete(id);
        console.log(`\nRemoved the book with ID ${id}`);
    }
    else {
        console.log(`\nError: Book with ID ${id} is not found`);
    }
}

function searchBookPrompt() {

    rl.question("\nEnter the key to search the book: ", function (searchTerm) {
        searchBooks(searchTerm);
        askCommand();
    });
}

function searchBooks(searchTerm) {

    const result = [];
    for (const [id, book] of booklib) {
        if (id.includes(searchTerm) || book.title.includes(searchTerm) || book.author.includes(searchTerm) || book.genre.includes(searchTerm)) {
            result.push({ id, ...book });
        }
    }
    if (result.length > 0) {
        console.log("\nSearched Book is: ", result);
    }
    else {
        console.log(`\nError: Searched book with ID ${id} is not found`);
    }
}

function updateBookPrompt() {

    rl.question("\nEnter the book ID to be updated: ", function (id) {
        rl.question("Enter the book title to be updated: ", function (newTitle) {
            rl.question("Enter the name of the author to be updated: ", function (newAuthor) {
                rl.question("Enter the genre of the book to be updated: ", function (newGenre) {
                    updateBook(id,newTitle,newAuthor,newGenre);
                    askCommand();
                });
            });
        });
    });
}

function updateBook(id,newTitle,newAuthor,newGenre) {

    if (booklib.has(id)) {

        const book = booklib.get(id);
        book.title = newTitle || book.title;
        book.author = newAuthor || book.author;
        book.genre = newGenre || book.genre;
        booklib.set(id,book);
        console.log(`\nBook with ID ${id} is updated`);
    }
    else {
        console.log(`\nError: Book with ID ${id} is not present`);
    }
}

function printSummary() {

    if (booklib.size > 0) {
        console.log("\nSummary is:")
        for (const [id,book] of booklib) {
            console.log(`ID: ${id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
        }
    }
    else{
        console.log("\nNo Books present")
    }
    askCommand();
}