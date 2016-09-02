'use strict';

/**
 * @ngdoc function
 * @name angular0415App.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angular0415App
 */
angular.module('angular0415App')
  .controller('ListCtrl', function ($scope, $http, $uibModal, $log) {
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: size,
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $http
      .jsonp('http://192.168.0.103:3000/list/findAll?callback=JSON_CALLBACK')
      .success(function (data) {
        $scope.users = data;
        $scope.oneAtATime = true;
        $scope.status = {
          open: false,
          isCustomHeaderOpen: false,
          isFirstOpen: false,
          isFirstDisabled: false
        };
      });

  });
