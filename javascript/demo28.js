console.log("Tutorial 28 : Implementting a library class");

// Create a class library and implementation the following  : 
/*
getBookList() : - get all book list in our library
issueBook(bookName,user) : - get issue book username
returnBook(bookName,user) : - book name, usename
create library class object 
constrastor as an argument
*/

class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issueBooks = {}
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName,user){
        console.log(this.issueBooks[bookName]);
        if(this.issueBooks[bookName] == undefined){
            this.issueBooks[bookName] = user;
        }
        else{
            console.log("This book is already issued!");
        }
    }

    returnBook(bookName){
        delete this.issueBooks[bookName];
    }
}
