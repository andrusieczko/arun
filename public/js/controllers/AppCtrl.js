define(['app'], function(app) {
  'use strict';

  return app.controller('AppCtrl', function($scope, Data) {

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

  });
});
