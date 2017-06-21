'use strict';

orderYourMealApp.controller('CheckoutController',
    function CheckoutController($scope, cart, customer, $location) {

  $scope.cart = cart;
  $scope.restaurantId =cart.restaurant.id;
  $scope.customer = customer;
  $scope.submitting = false;

$scope.backtomenu=function () {
    window.history.back();
}
  $scope.purchase = function() {
    if ($scope.submitting) return;

    $scope.submitting = true;
    cart.submitOrder().then(function(orderId) {
      $location.path('/thank-you');
    });
  };
});
