"use strict";
var myApp = angular.module('myApp', []).filter('selectedBookItemFilter', function () {
  return function (input_) {
    if (input_ === null) {
      return "new";
    }
    return input_;

  };
})

myApp.controller('bookCtrl', [
  '$scope',
  '$http',
  'bookService',
  function bookCtrl($scope, $http, bookService) {
    console.log('Book Controller');
    /*
    $http.get("data/books.json").then(
      function (response) {
        $scope.books = response.data;
        console.log('Successful HTTP Response');
      }
    );*/
    /* get the books from books object */
    bookService.initBooks();
    $scope.books = bookService.getBooks();
    $scope.save = function (bookName) {
      console.log('Book Controller Save fxn %', bookName);
      bookService.addBook(bookName);
    };
    $scope.idSelectedBook = null;
    $scope.setSelected = function (id) {


      $scope.idSelectedBook = id;
      $scope.bookName
    };
    $scope.isSelected = function () {
      if ($scope.idSelectedBook === null) {
        return false;
      }
      else {
        return true;
      }
    }
    $scope.newBook = function () {
      $scope.idSelectedBook = null;
      $scope.bookName = null;
    }

  }
]
);

myApp.service('bookService', function () {

  /* books */


  /* initBooks */
  this.initBooks = function initBooks() {
    this.books = [];
    this.nextBookId = -1;
    this.logBooks("initBooks");
    return this.books;
  }


  /*  getBooks */
  this.getBooks = function getBooks() {
    this.logBooks("getBooks");
    return this.books;
  }
  /* addBook */
  this.addBook = function addBook(name_) {
    var book_ = {};
    book_["name"] = name_;
    this.nextBookId++;
    var bookId_ = this.nextBookId;
    book_["id"] = bookId_;
    this.books.push(book_);
    this.logBooks("addBook");
  }
  /* removeBook */
  this.removeBook = function removeBook(name_) {
    var arrayLength = this.books.length;
    var index = -1;
    for (var i = 0; i < arrayLength; i++) {
      if (this.books[i].name == name_) {
        console.log("found book %s", name_);
        index = i;
      }
    }
    if (index > -1) {
      this.books.splice(index, 1);
      console.log("remove book at %s", index);
    }
    this.logBooks( "removeBook");
  }

  /** logBooks */
  this.logBooks = function logBooks(context_) {
    var arrayLength = this.books.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log("%s book name %s", context_, this.books[i].name);
    }


  }



});