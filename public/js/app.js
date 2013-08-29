'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', '$provide', function($routeProvider, $locationProvider, $provide) {
    /*uncomment out this block if you want to simulate html5mode(true) in an uncompatible browser */
    /*$provide.decorator('$sniffer', function($delegate) {
      $delegate.history = false;
      return $delegate;
    });  */
    /*---------------------------------------------------------------- */

    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: AddPostCtrl
      }).
      when('/readPost/:id', {
        templateUrl: 'partials/readPost',
        controller: ReadPostCtrl
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: EditPostCtrl
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: DeletePostCtrl
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  }]);