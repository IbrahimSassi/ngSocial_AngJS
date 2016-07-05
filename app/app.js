'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ngSocialApp', [
  'ngRoute',
  'ngSocialApp.facebook',
]);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/facebook'});
}]);

app.controller