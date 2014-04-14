define([], function() {
  'use strict';
  return function($http) {
    return {
      getData: function() {
        return $http.get('/data');
      }
    };
  };
});
