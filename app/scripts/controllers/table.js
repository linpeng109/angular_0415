/**
 * Created by Mars on 2016/9/6.
 * Ctroller of the Angular0415App
 * # TableCtrl
 */
'use strict';
angular.module('angular0415App')
  .controller('TableCtrl', function ($scope, $http, NgTableParams) {
    $http
      .jsonp('http://192.168.0.103:3000/list/findAll?callback=JSON_CALLBACK')
      .success(function (data) {
        $scope.tableParams = new NgTableParams({}, {dataset: data});
      });

  });
