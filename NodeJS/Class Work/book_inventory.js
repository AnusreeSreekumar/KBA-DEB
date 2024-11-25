const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventory = new Map();

function askCommand() {

    console.log("Welcome to  Book Inventory Management System");
    console.log("Available commands are: add, remove, search, update, summary, exit");
    rl.question("\Enter a command:", function (command) {

        switch (command.trim().toLowerCase()) {

            case 'add':
                addItemPrompt();
                break;
            case 'remove':
                removeItemPrompt();
                break;
            case 'search':
                searchItemPrompt();
                break;
            case 'update':
                updateItemPrompt();
                break;
            case 'summary':
                printSummary();
                askCommand();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log("Please enter valid command");
                askCommand();
                break;
        }
    });

}
askCommand();

function addItemPrompt() {

    rl.question("Enter the book ID: ", function (id) {
        rl.question("Enter the book title: ", function (title) {
            rl.question("Enter the author name: ", function (author) {
                addBook(id, title, author);
                askCommand();
            });
        });
    });
}

function addBook(id, title, author) {

    if (inventory.has(id)) {
        console.log(`Error: The book with ID ${id} is already present`);
    }
    else {
        
        console.log(`The book with ID ${id} is added to the inventory`);
    }
}

function removeItemPrompt() {

    rl.question("Enter id of the book to be removed: ", function (id) {
        removeBook(id);
        askCommand();
    });
}

function removeBook(id) {

    if (inventory.has(id)) {
        inventory.delete(id);
        console.log(`The book with ID ${id} is removed`);
    }
    else {
        console.log(`Error: The book with ID ${id} is not present`);
    }
}

function searchItemPrompt() {

    rl.question("Enter id of the book to be searched: ", function (searchTerm) {
        searchBook(searchTerm);
        askCommand();
    });
}

function searchBook(searchTerm) {

    const result = [];
    for (const [id, book] of inventory) {
        if (id.includes(searchTerm) || book.title.includes(searchTerm) || book.author.includes(searchTerm)) {
            result.push({ id, ...book });
        }
    }
    if (result.length > 0) {
        console.log("Searched Book is: ", result);
    }
    else {
        console.log("Error: Searched book is not present");
    }
}

function updateItemPrompt() {

    rl.question("Enter the id of the book to be updated: ", function (id) {
        rl.question("Enter the changed book title: ", function (newTitle) {
            rl.question("Enter the changed book author: ", function (newAuthor) {
                updateBook(id, newTitle, newAuthor);
                askCommand();
            });
        });
    });
}

function updateBook(id, newTitle, newAuthor) {

    if (inventory.has(id)) {
        const book = inventory.get(id)
        book.title = newTitle || book.title;
        book.author = newAuthor || book.author;
        inventory.set(id,book);
        console.log(`The book with ID ${id} is updated`);
    }
    else{
        console.log(`Error: The book with ID ${id} is not present`);
    }
}

function printSummary(){

    if(inventory.size > 0){
        console.log("inventoryrary summary is: ");
        for(const [id,item]of inventory){
            console.log(`ID: ${id}, Title: ${item.title}, Author: ${item.author}`);
        }
    }
    else{
        console.log("No such book");
    }
    askCommand();
}
