'use strict';
/* Controllers */

var bookControllers = angular.module('Bookctrl', []);



bookControllers.controller('BookListCtrl', ['$scope',
  function($scope,BOOKK) {
    if(localStorage.getItem("books") != null)
    {
    $scope.books = JSON.parse(localStorage.getItem("books"));
    }else{
    $scope.books = [];
    }
  }]);

bookControllers.controller('ADD', ['$scope',
  function($scope) {
    $scope.F1 = function(){
    var bks
    if(localStorage.getItem("books") != null)
    {
    bks = JSON.parse(localStorage.getItem("books")); 
    }else{
    bks = []; 
    }
    var id = new ObjectId();
    bks.push({"id" : '_'+id.timestamp+id.machine+id.pid,"title" : $scope.title,"price":$scope.price});
    $scope.title = "";
    $scope.price = "";
    localStorage.setItem("books",JSON.stringify(bks));
    $scope.books = JSON.parse(localStorage.getItem("books"));
    }
    

  }]);

bookControllers.controller('BookDeleteCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
      $scope.bookId = $routeParams.bookId;
      var books1 = [];    
      angular.forEach(JSON.parse(localStorage.getItem("books")),function(book){
      if(book.id != $scope.bookId)
      {
      books1.push(book);
      }
      });
    localStorage.setItem("books",JSON.stringify(books1));
    $scope.books = JSON.parse(localStorage.getItem("books"));
}]);


bookControllers.controller('BookEditCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
      $scope.bookId = $routeParams.bookId;
      var books1;    
      angular.forEach(JSON.parse(localStorage.getItem("books")),function(book){
      if(book.id == $scope.bookId)
      {
      books1 = book;
      }
      });
      $scope.id = books1.id;
      $scope.title = books1.title;
      $scope.price = books1.price;
      
      $scope.UPDATE = function(){
      var newbooks = [];
      angular.forEach(JSON.parse(localStorage.getItem("books")),function(book){
      if(book.id == $scope.id)
      {
      newbooks.push({"id" : $scope.id,"title":$scope.title,"price":$scope.price});
      }
      else{
      newbooks.push(book);
      }
      });
      localStorage.setItem("books",JSON.stringify(newbooks));
      }
}]);





