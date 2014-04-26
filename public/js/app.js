define(['angular',
  'controllers/AppCtrl',
  'directives/well',
  'services/Data',
  'angular-route', 'ui-bootstrap', 'ui-bootstrap-tpls'
], function(angular, AppCtrl, well, Data) {
  'use strict';

  var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap']);

  app
    .controller('AppCtrl', AppCtrl)
    .directive('well', well)
    .factory('Data', Data);

  return app;
});
