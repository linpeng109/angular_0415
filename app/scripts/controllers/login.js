'use strict';

/**
 * @ngdoc function
 * @name angular0415App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angular0415App
 */
angular.module('angular0415App')
  .controller('LoginCtrl', function ($scope, $http) {

    $scope.passportLocalLogin = function () {
      var url = 'http://192.168.0.103:3000/authentication/login';
      var params = {
        username: $scope.username,
        password: $scope.password,
        callback: 'JSON_CALLBACK'
      };
      $http
        .jsonp(url, {params: params})
        .success(function (data) {
          $scope.token = data.token;
        });
    };
  });
