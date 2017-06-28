'use strict';

orderYourMealApp.controller('CustomerController',
    function CustomerController($scope, customer, $location,$http,$rootScope) {

/*  $scope.customerName = customer.name;
  $scope.customerAddress = customer.address;*/
        $scope.location_name='';
        var mydata='';
        var citydata='';
        var mysrclat= 0; var mysrclong = 0;
        $scope.nearme = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {

                    mysrclat = position.coords.latitude;
                    mysrclong = position.coords.longitude;
                    console.log(mysrclat);
                    console.log(mysrclong);
                    var config = {headers: {
                        'user-key': 'd1a4ed7215f44239de81f991df52350d',
                        'Accept': 'application/json'
                    }
                    };
                    $http.get("https://developers.zomato.com/api/v2.1/geocode?lat="+mysrclat+"&lon="+mysrclong,config)
                        .then(function(response) {
                            mydata=response.data.location.title;
                            citydata=response.data.location.city_id;
                            console.log(mydata);
                            $scope.xyz= mydata;
                            $scope.customerLocation=citydata;
                            $scope.findRestaurants();
                        });

                });

            }


        };
        $scope.getLocation= function(cityObj){
      $scope.xyz= cityObj.title;
      $scope.customerLocation=cityObj.city_id;
      console.log('cityoje',JSON.stringify(cityObj));
      $scope.locations='';
  };

  $scope.findRestaurants = function() {
    /*customer.name = customerName;
    customer.address = customerAddress;*/
    console.log('location selected',$scope.customerLocation,$scope.xyz);
     if($scope.customerLocation && $scope.xyz){

         $location.url('/resturants?cityId='+$scope.customerLocation+'&q='+$scope.xyz);

     }
      //$rootScope.value=$scope.xyz;


  };
        $scope.searchLocation= function (name) {
            var config = {headers: {
                'user-key': 'd1a4ed7215f44239de81f991df52350d',
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
