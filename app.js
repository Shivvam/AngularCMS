'use strict';

/* App Module */

var bookApp = angular.module('BookApp', [
  'ngRoute',
  'Bookctrl'
]);

bookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/HOME', {
        templateUrl: 'LIST.html',
        controller: 'BookListCtrl'
      }).
      when('/DELETE/:bookId', {
        templateUrl: 'LIST.html',
        controller: 'BookDeleteCtrl'
      }).
      when('/EDIT/:bookId', {
        templateUrl: 'EDIT.html',
        controller: 'BookEditCtrl'
      }).
      otherwise({
        redirectTo: '/HOME'
      });
  }]);



