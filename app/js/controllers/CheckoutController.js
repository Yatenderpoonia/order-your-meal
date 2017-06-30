'use strict';

orderYourMealApp.controller('CheckoutController',
    function CheckoutController($scope, cart, customer, $location,$http) {
  $scope.customerName='';
  $scope.customerAddress='';
  $scope.cart = cart;
  $scope.restaurantId =cart.restaurant.id;
  $scope.customer = customer;
  $scope.res_name = $location.search().name;
  $scope.res_address = $location.search().address;
  $scope.submitting = false;
var data={};
$scope.backtomenu=function () {
    window.history.back();
};
  $scope.purchase = function() {
      data = {
          "name": $scope.customerName,
          "Delivery_address": $scope.customerAddress,
          "items": cart.items,
          "payment": cart.payment,
          "totalamount": cart.total(),
          "resturant name": $scope.res_name,
          "resturant address": $scope.res_address
      };
      console.log(JSON.stringify(data));

 $http.post("https://arcane-beyond-17211.herokuapp.com/checkout",data,{
    headers: {'Content-Type': 'application/json'}
}).then(function (response) {
console.log(JSON.stringify(data));
});
    $location.url('/thank-you?name='+ $scope.customerName);
  };
});
