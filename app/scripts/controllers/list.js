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
      .jsonp('http://192.168.0.103:3000/list/findAll?pageSize=10&pageNum=1&callback=JSON_CALLBACK')
      .success(function (data) {
        $scope.users = data;
        $scope.itemsByPage = 15;
      });
  });

