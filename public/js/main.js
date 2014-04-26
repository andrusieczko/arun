require.config({
  baseUrl: '/js',
  paths: {
    'angular': '../libs/angular/angular.min',
    'angular-route': '../libs/angular-route/angular-route.min',
    'ui-bootstrap': '../libs/angular-bootstrap/ui-bootstrap.min',
    'ui-bootstrap-tpls': '../libs/angular-bootstrap/ui-bootstrap-tpls.min'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angular-route': {
      'deps': ['angular']
    },
    'ui-bootstrap': {
      'deps': ['angular']
    },
    'ui-bootstrap-tpls': {
      'deps': ['ui-bootstrap']
    }
  }
});

require(['angular', 'routes/routes'], function(angular) {
  'use strict';
  angular.bootstrap(document, ['mainApp']);
});
