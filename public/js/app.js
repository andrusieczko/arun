define(['angular',
  'directives/well',
  'angular-route', 'ui-bootstrap'], function(angular, well) {
  'use strict';

  var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap']);

  app.directive('well', well);

  return app;
});
