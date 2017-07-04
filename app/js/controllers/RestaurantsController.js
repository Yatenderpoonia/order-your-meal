'use strict';

orderYourMealApp.controller('RestaurantsController',
    function RestaurantsController($scope, customer, $location, Restaurant,$http, $rootScope) {

  /*if (!customer.address) {
    $location.url('/resturants');
  }*/
  $scope.showLoader=true;
  $scope.loadResturants=true;
  $scope.address=$location.search().q;
  if($scope.showLoader)
  {
      $scope.loadResturants=false;
  }
$scope.filterResturants='';
  var filter = $scope.filter = {
    cuisine: [],
    price: null,
    rating: null
  };
        var allRestaurants=[];
  //var allRestaurants = Restaurant.query(filterAndSortRestaurants);
        var generateRestaurantFromResponse=function(resturants){
          //console.log(JSON.stringify(resturants));
            $rootScope.restaurants=[];

            angular.forEach(resturants,function (resturant,index) {
                var temp={};
                temp.name=resturant.restaurant.name;
                temp.description=resturant.restaurant.location.address;
                temp.rating= parseInt(resturant.restaurant.user_rating.aggregate_rating);
                temp.price=parseInt(resturant.restaurant.price_range);
                temp.img=resturant.restaurant.featured_image;
                //temp.menuimg=resturant.restaurant.menu_url;
                temp.cuisine=resturant.restaurant.cuisines;
                temp.id=resturant.restaurant.id;
                $scope.restaurants.push(temp);
                allRestaurants.push(temp);
            })
        };
  var getRestaurants = function () {
      var cityId = $location.search().cityId;
      var query=$location.search().q;
      //
      var config = {headers: {
          'user-key': 'd1a4ed7215f44239de81f991df52350d',
          'Accept': 'application/json'
      }
      };
      $http.get("https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&start=0&count=20"+"&entity_type=city&q="+query.split(',')[0],config)
          .then(function(response) {
              //First function handles success

              generateRestaurantFromResponse(response.data.restaurants);
              generateCuisneFromRespnose(response.data.restaurants);
             /* $scope.showLoader=false;
              $scope.loadResturants=true;*/
          }, function(response) {
              //Second function handles error
              alert("Something went wrong");
          });
      $http.get("https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&start=20&count=40"+"&entity_type=city&q="+query.split(',')[0],config)
          .then(function(response) {
              //First function handles success

              generateRestaurantFromResponse(response.data.restaurants);

              generateCuisneFromRespnose(response.data.restaurants);
              /*$scope.showLoader=false;
              $scope.loadResturants=true;*/
          }, function(response) {
              //Second function handles error
              alert("Something went wrong");
          });
      $http.get("https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&start=40&count=60"+"&entity_type=city&q="+query.split(',')[0],config)
          .then(function(response) {
              //First function handles success

              generateRestaurantFromResponse(response.data.restaurants);

              generateCuisneFromRespnose(response.data.restaurants);
             /* $scope.showLoader=false;
              $scope.loadResturants=true;*/
          }, function(response) {
              //Second function handles error
              alert("Something went wrong");
          });
      $http.get("https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&start=60&count=80"+"&entity_type=city&q="+query.split(',')[0],config)
          .then(function(response) {
              //First function handles success

              generateRestaurantFromResponse(response.data.restaurants);

              generateCuisneFromRespnose(response.data.restaurants);
             /* $scope.showLoader=false;
              $scope.loadResturants=true;*/
          }, function(response) {
              //Second function handles error
              alert("Something went wrong");
          });
      $http.get("https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&start=80&count=100"+"&entity_type=city&q="+query.split(',')[0],config)
          .then(function(response) {
              //First function handles success

              generateRestaurantFromResponse(response.data.restaurants);

              generateCuisneFromRespnose(response.data.restaurants);
              $scope.showLoader=false;
              $scope.loadResturants=true;
          }, function(response) {
              //Second function handles error
              alert("Something went wrong");
          });
  };
  getRestaurants();
  $scope.$watch('filter', filterAndSortRestaurants, true);

  function filterAndSortRestaurants() {
    $scope.restaurants = [];
    console.log('filter csuinse',filter.cuisine);
    // filter
    angular.forEach(allRestaurants, function(item, key) {
      if (filter.price && filter.price !== item.price) {
        return;
      }

      if (filter.rating && filter.rating !== item.rating) {
        return;
      }

      if (filter.cuisine.length) {
          var isPassed = false;
         filter.cuisine.forEach(function (cu) {
             if(item.cuisine.toString().indexOf(cu)>-1){
                 isPassed=true;
             }
         });
         if(!isPassed)return ;

      }

      $scope.restaurants.push(item);
    });


    // sort
    $scope.restaurants.sort(function(a, b) {
      if (a[filter.sortBy] > b[filter.sortBy]) {
        return filter.sortAsc ? 1 : -1;
      }

      if (a[filter.sortBy] < b[filter.sortBy]) {
        return filter.sortAsc ? -1 : 1;
      }

      return 0;
    });
  };


  $scope.sortBy = function(key) {
    if (filter.sortBy === key) {
      filter.sortAsc = !filter.sortAsc;
    } else {
      filter.sortBy = key;
      filter.sortAsc = true;
    }
  };


  $scope.sortIconFor = function(key) {
    if (filter.sortBy !== key) {
      return '';
    }

    return filter.sortAsc ? '\u25B2' : '\u25BC';
  };
       var  generateCuisneFromRespnose = function(restaurants){
           var cuisineSet = new Set();
            restaurants.forEach(function (rest) {
                var temprest  = rest.restaurant.cuisines.split(',');
                temprest.forEach(function (cu) {
                    cuisineSet.add(cu);
                })
            });
            $scope.CUISINES = Array.from(cuisineSet);
            console.log('custion',JSON.stringify($scope.CUISINES));

        };

});
