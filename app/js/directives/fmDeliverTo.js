'use strict';

orderYourMealApp.directive('fmDeliverTo', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/fmDeliverTo.html',
    scope: {},
    controller: function FmDeliverToController($scope,$location) {
      $scope.customer = $location.search().q;
    }
  };
});
