// an example simple directive with a template in a separate file 
define([], function() {
  'use strict';
  return function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        title: "@"
      },
      templateUrl: 'partials/components/well/well'
    };
  };
});
