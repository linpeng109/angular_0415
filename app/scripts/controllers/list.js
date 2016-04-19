'use strict';

/**
 * @ngdoc function
 * @name angular0415App.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angular0415App
 */
angular.module('angular0415App')
  .controller('ListCtrl', function ($scope, $http) {


    $http.get('http://localhost:3000/findByPage?callback=JSON_CALLBACK').success(function (data) {
      console.log(data);
      $scope.users = data;
    });
  });
