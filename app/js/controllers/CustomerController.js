'use strict';

orderYourMealApp.controller('CustomerController',
    function CustomerController($scope, customer, $location,$http,$rootScope) {

/*  $scope.customerName = customer.name;
  $scope.customerAddress = customer.address;*/
        NProgress.start();
        $rootScope.loginShow = true;
       // $rootScope.logoutShow = true;
        $scope.location_name='';
        var mydata='';
        var citydata='';
        var mysrclat= 1; var mysrclong = 1;
        $scope.loginGo=function () {
            $location.path('/login');
        };
        if(localStorage.getItem('userId'))
        {
            $rootScope.loginShow=false;
            $rootScope.logoutShow = true;
        }
        $scope.logout=function () {
            NProgress.start();
            localStorage.clear();
            $location.path('/');
            $rootScope.loginShow = true;
            $rootScope.logoutShow = false;
            NProgress.done();
        };
        $scope.nearme = function() {
            NProgress.start();
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
                           // console.log(mydata);
                            $scope.xyz= mydata;
                            $scope.customerLocation=citydata;
                            $scope.findRestaurants();
                            NProgress.done();
                        },function (response) {
                            NProgress.start();
                            BootstrapDialog.alert(response.data.message);
                            NProgress.done();
                        });

                });

            }


        };
        $scope.getLocation= function(cityObj){
            if(cityObj.title){
                $scope.xyz= cityObj.title;
                $scope.customerLocation=cityObj.city_id;
            }
            else {
                $scope.xyz=cityObj.name;
                $scope.customerLocation=cityObj.city_id;
            }

     // console.log('cityoje',JSON.stringify(cityObj));
      $scope.locations='';
            $scope.location='';
  };

  $scope.findRestaurants = function() {
      NProgress.start();
    /*customer.name = customerName;
    customer.address = customerAddress;*/
    //console.log('location selected',$scope.customerLocation,$scope.xyz);
     if($scope.customerLocation && $scope.xyz){

         $location.url('/resturants?cityId='+$scope.customerLocation+'&q='+$scope.xyz);

     }
      //$rootScope.value=$scope.xyz;

      NProgress.done();
  };

$scope.findLocation=function (name) {
    $http.get('https://arcane-beyond-17211.herokuapp.com/location/name='+name)
        .then(function (response) {
            $scope.location=response.data;
            console.log($scope.location);

        })

};
        $scope.searchLocation= function (name) {
            $http.get('https://arcane-beyond-17211.herokuapp.com/location/name='+name)
                .then(function (response) {
                    $scope.location=response.data;
                    console.log($scope.location);

                });
            var config = {headers: {
                'user-key': 'd1a4ed7215f44239de81f991df52350d',
                'Accept': 'application/json'
            }
            };
            $http.get("https://developers.zomato.com/api/v2.1/locations?query="+name+'&count=6',config)
                .then(function(response) {
                    //First function handles success
                    $scope.locations = response.data.location_suggestions;
                }, function(response) {
                    //Second function handles error

                    alert("Something went wrong");
                });
        };
        NProgress.done();
});
