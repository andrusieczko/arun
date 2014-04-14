define([], function() {
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