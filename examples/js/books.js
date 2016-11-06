"use strict";




function books() {
    
    /* initBooks */
    this.initBooks = function initBooks(scope_) {
        scope_.books = [];
        scope_.nextBookId = -1;
        this.logBooks(scope_,"initBooks");
        return scope_.books;
    }
    

    /*  getBooks */
    this.getBooks = function getBooks(scope_) {
        this.logBooks(scope_,"getBooks");
        return scope_.books;
    }
    /* addBook */
    this.addBook = function addBook(scope_,name_) {
        var book_ = {};
        book_["name"] = name_;
        scope_.nextBookId++;
        var bookId_ = scope_.nextBookId;
        book_["id"] = bookId_;
        scope_.books.push(book_);
        this.logBooks(scope_,"addBook");
    }
    /* removeBook */
    this.removeBook = function removeBook(scope_,name_) {
        var arrayLength = scope_.books.length;
        var index = -1;
        for (var i = 0; i < arrayLength; i++) {
            if (scope_.books[i].name == name_) {
                console.log("found book %s", name_);
                index = i;
            }
        }
        if ( index > -1 )
        {
            scope_.books.splice(index,1);
            console.log("remove book at %s", index);
        }
        this.logBooks(scope_,"removeBook");
    }


    this.logBooks = function logBooks(scope_,context_) {
        var arrayLength = scope_.books.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log("%s book name %s", context_, scope_.books[i].name);
        }


    }
}



window.books = new books();


