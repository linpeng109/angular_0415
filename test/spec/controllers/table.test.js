/**
 * Created by Mars on 2016/9/7.
 */
'use strict';

describe('Controller: TableCtrl', function () {

  // load the controller's module
  beforeEach(module('angular0415App'));

  var TableCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TableCtrl = $controller('TableCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should list all users infomation', function () {
    // console.log(scope.awesomeThings);
    expect(scope.awesomeThings.length).toBe(3);
  });
});
