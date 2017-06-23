'use strict';

orderYourMealApp.controller('ThankYouController', function ThankYouController($scope,$location) {
  //$scope.orderId = $routeParams.orderId;
    $scope.name=$location.search().name;
  $scope.backtohome=function () {
      $location.path('/');
  };
  $scope.feedback=function () {
      $location.path('/feed');
  };
});
