'use strict';

orderYourMealApp.controller('ThankYouController', function ThankYouController($scope, $routeParams,$location) {
  //$scope.orderId = $routeParams.orderId;
  $scope.backtohome=function () {
      $location.path('/');
  };
  $scope.feedback=function () {
      $location.path('/feed');
  };
});
