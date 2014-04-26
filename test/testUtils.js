define(['app', 'angularMocks'], function() {
  return {
    getScope: function(controllerName) {
      var $scope;
      module('mainApp');
      inject(function($injector) {
        $scope = $injector.get('$rootScope').$new();
        $injector.get('$controller')(controllerName, {
          $scope: $scope
        });
      });
      return $scope;
    }
  };

});