'use strict';

orderYourMealApp.controller('CheckoutController',
    function CheckoutController($scope, cart, customer, $location,$http,$rootScope,localStorage) {
  $scope.customerName=JSON.parse(localStorage.getItem('userName'));
  $scope.customerMobile='';
  $scope.customerAddress='';
  $scope.cart = cart;
  $scope.restaurantId =$location.search().id;
  $scope.customer = customer;
  $scope.res_name = $location.search().name;
  $scope.res_address = $location.search().address;
  $scope.submitting = false;
        var data={};
$scope.backtomenu=function () {
    $location.url('/menu?id='+ $scope.restaurantId);
};
  $scope.purchase = function() {
      localStorage.removeItem('fmCartItems');
      //console.log(cart.fmCartItems);
      data = {
          "name": $scope.customerName,
          "Delivery_address": $scope.customerAddress,
          "mobile":$scope.customerMobile,
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
