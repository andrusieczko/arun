define(['angularMocks', 'app', 'controllers/AppCtrl'], function() {
  'use strict';
  describe('App', function() {

    var $scope;
    beforeEach(function() {
      module('mainApp');
      inject(function($injector) {
        $scope = $injector.get('$rootScope').$new();
        $injector.get('$controller')('AppCtrl', {
          $scope: $scope
        });
      });
    });

    it('should have sayHello method in $scope', function() {
      // given

      // when
      var result = $scope.sayHello();

      // then
      expect(result).toBe("hello");
    });

    it('should be truthy', function() {
      // given
      var expected = 1;

      // when
      var result = 1;

      // then
      expect(result).toBe(expected);
    });
  });
});