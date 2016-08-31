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
      .jsonp('http://192.168.0.103:3000/list/findAll?callback=JSON_CALLBACK')
      .success(function (mydata) {

        var myDefs = [
          {field: '_id', displayName: '用户ID'},
          {field: 'userName', displayName: '用户名'},
          {field: 'passWord', displayName: '口令', width: '*'},
          {field: 'department', displayName: '部门', width: '*'}];

        // $scope.gridOptions = {
        //   data: mydata
        //   // ]
        // };
        $scope.mydata = mydata;
        $scope.myDefs = myDefs;
        // $scope.gridOptions={data:mydata,columnDefs:myDefs};
      });
  });
