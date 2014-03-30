require.config({
  baseUrl: '/js',
  paths: {
    'angular': '../libs/angular',
    'angular-route': '../libs/angular-route.min',
    'ui-bootstrap': '../libs/bootstrap/ui-bootstrap',
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angular-route': {
      'deps': ['angular']
    },
    'ui.ui-bootstrap': {
      'deps': ['angular']
    }
  }
});

require(['angular', 'routes/routes'], function(angular) {
  'use strict';
  angular.bootstrap(document, ['mainApp']);
});
