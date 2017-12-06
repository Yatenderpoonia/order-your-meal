'use strict';

orderYourMealApp.controller('ThankYouController', function ThankYouController($scope,$location) {
    NProgress.start();
  //$scope.orderId = $routeParams.orderId;
    $scope.name=$location.search().name;
    if($location.search().name==true||$location.search().name==undefined){
        $location.path('/');
    }
  $scope.backtohome=function () {
      $location.path('/');
  };
  $scope.feedback=function () {
      $location.path('/feed');
  };
    NProgress.done();
});
