define([], function() {
  'use strict';

  return function($scope, Data) {

    $scope.text = "AngularJS";
    $scope.data = {};

    $scope.sayHello = function() {
      return "hello";
    };

    $scope.getData = function() {
      Data.getData().then(function(data) {
        $scope.data = data.data;
      });
    };

  };
});
