'use strict';

orderYourMealApp.controller('CustomerController',
    function CustomerController($scope, customer, $location,$http,$rootScope) {

  $scope.customerName = customer.name;
  $scope.customerAddress = customer.address;
  $scope.customerLocation='';
  $scope.xyz='';


  $scope.getLocation= function(cityObj){
      $scope.xyz= cityObj.title;
      $scope.customerLocation=cityObj.city_id;
  };

  $scope.findRestaurants = function(customerName, customerAddress) {
    customer.name = customerName;
    customer.address = customerAddress;

    $location.url('/resturants?cityId='+$scope.customerLocation);
      $rootScope.value=$scope.xyz;


  };
        $scope.searchLocation= function (name) {
            var config = {headers: {
                'user-key': '1cd8ad9c1877866225f7ee09eede4ce8',
                'Accept': 'application/json'
            }
            };
            $http.get("https://developers.zomato.com/api/v2.1/locations?query="+name+'&count=5',config)
                .then(function(response) {
                    //First function handles success
                    $scope.locations = response.data.location_suggestions;
                }, function(response) {
                    //Second function handles error
                    alert("Something went wrong");
                });
        }
});
