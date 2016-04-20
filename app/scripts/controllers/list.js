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
    $http
      .jsonp('http://192.168.0.104:3000/findByPage?pageSize=20&pageNum=1&callback=JSON_CALLBACK')
      .success(function (data) {
        $scope.users = data;
      }); 
  });

