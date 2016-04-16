'use strict';

/**
 * @ngdoc overview
 * @name angular0415App
 * @description
 * # angular0415App
 *
 * Main module of the application.
 */
angular
  .module('angular0415App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/message', {
        templateUrl: 'views/message.html',
        controller: 'MessageCtrl',
        controllerAs: 'message'
      })
      .when('/button', {
        templateUrl: 'views/button.html',
        controller: 'ButtonCtrl',
        controllerAs: 'button'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
