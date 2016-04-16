'use strict';

describe('Controller: ButtonCtrl', function () {

  // load the controller's module
  beforeEach(module('angular0415App'));

  var ButtonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ButtonCtrl = $controller('ButtonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ButtonCtrl.awesomeThings.length).toBe(3);
  });
});
