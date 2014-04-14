define(['angular',
  'directives/well',
  'services/Data',
  'angular-route', 'ui-bootstrap', 'ui-bootstrap-tpls'
], function(angular, well, Data) {
  'use strict';

  var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap']);

  app
    .directive('well', well)
    .factory('Data', Data);

  return app;
});
