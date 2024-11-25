const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const booklib = new Map();

function askCommand() {

    console.log("\Welcome to Book Manage Inventory");
    console.log("\Choose a command: add, remove, search, update, summary, exit");
    rl.question("Enter a command: ", function (command) {

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

    rl.question("Enter the book ID: ", function (id) {
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
        console.log(`\Error: Book with ID ${id} is already present`);
    }
    else {
        booklib.set(id, { title, author, genre });
        console.log(`\Book with ID ${id} is add to the library`);
    }
}

function removeBookPrompt() {

    rl.question("Enter the ID of the book to be removed: ", function (id) {
        removeBook(id);
        askCommand();
    });
}

function removeBook(id) {

    if (booklib.has(id)) {
        booklib.delete(id);
        console.log(`\Removed the book with ID ${id}`);
    }
    else {
        console.log(`\Error: Book with ID ${id} is not found`);
    }
}

function searchBookPrompt() {

    rl.question("Enter the id of the book to be searched: ", function (id) {
        searchBooks(searchTerm);
        askCommand;
    });
}

function searchBooks(id) {

    // const result = [];
    for (const [id, book] of booklib) {
        if (id.includes(searchTerm) || book.title.includes(searchTerm) || book.author.includes(searchTerm) || book.genre.includes(searchTerm)) {

            console.log("Searched Book is:");
            console.log(`\ID: ${id}, Title: ${title}, Author: ${author}, Genre: ${genre}`);
        }
        else{
            console.log(`\Error: Searched book with ID ${id} is not found`);
        }
    }
}

function updateBookPrompt() {

    rl.question("Enter the book ID to be updated: ", function (id) {
        rl.question("Enter the book title to be updated: ", function (newTitle) {
            rl.question("Enter the name of the author to be updated: ", function (newAuthor) {
                rl.question("Enter the genre of the book to be updated: ", function (newGenre) {
                    updateBook(id, newTitle, newAuthor, newGenre);
                    askCommand();
                });
            });
        });
    });
}

function updateBook(id, newTitle, newAuthor, newGenre){

    if(booklib.has(id)){

        const book = booklib.get(id);
        book.title = newTitle || book.title;
        book.author = newAuthor || book.author;
        book.genre = newGenre || book.genre;
        console.log(`\Book with ID ${id} is updated`);
    }
    else{
        console.log(`Error: Book with ID ${id} is not present`);
    }
}

function printSummary(){

    if(booklib.size > 0){
        for(const[id,book] of booklib){
            console.log(`ID: ${id}, Title: ${title}, Author: ${author}, Genre: ${genre}`);
        }
    }
    askCommand() 
}