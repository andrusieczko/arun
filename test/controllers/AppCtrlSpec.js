define(['testUtils'], function(testUtils) {
  'use strict';
  describe('App', function() {

    var $scope;
    beforeEach(function() {
      $scope = testUtils.getScope('AppCtrl');
    });

    it('should have sayHello method in $scope', function() {
      // given

      // when
      var result = $scope.sayHello();

      // then
      expect(result).toBe("hello");
    });

  });
});