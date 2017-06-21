'use strict';

orderYourMealApp.controller('MenuController',
    function MenuController($scope, $routeParams, Restaurant, cart, $http,$location) {
       //alert('coming');
  //$scope.restaurant = Restaurant.get({id: $routeParams.restaurant});
        $scope.restaurant ={
            "menuItems":[{"name":"Aloo Gobi","price":5.95},{"name":"Basmati rice","price":6.95},{"name":"Butter Chicken","price":5.95},{"name":"Chicken Korma","price":7.55},{"name":"Chicken Tikka Masala","price":5.95},{"name":"Gulab Jamun","price":8.95},{"name":"Kheer","price":4.5},{"name":"Lamb Asparagus","price":9.5},{"name":"Lamb Vindaloo","price":7.95},{"name":"Mix Grill Bombay","price":5.95},{"name":"Mulligatawny soup","price":5.95},{"name":"Murgh Chicken","price":3.95},{"name":"Naan stuffed with spinach and lamb","price":4.55},{"name":"Plain naan","price":5.95},{"name":"Rogan Josh","price":5.95},{"name":"Saag Paneer","price":5.95},{"name":"Tandoori Chicken","price":4.95},{"name":"B.L.T. and Avocado Sandwich","price":5.95},{"name":"Caesar salad","price":5.95},{"name":"Cappucino","price":3.95},{"name":"Cherry cheesecake","price":4.95},{"name":"Chocolate chip cookie","price":4.55},{"name":"Cobb salad","price":6.95},{"name":"Drip coffee","price":5.95},{"name":"Eggsalad Sandwich","price":3.95},{"name":"Espresso","price":6.95},{"name":"Greek salad","price":3.95},{"name":"Hot tea","price":2.5},{"name":"Iced tea","price":2.5},{"name":"Latte","price":4},{"name":"Mango and banana smoothie","price":3},{"name":"Orange juice","price":4.95},{"name":"Quiche of the day","price":6.95},{"name":"Turkey Sandwich","price":7.55}]
        };
        $scope.cart = cart;
        console.log($scope.restaurant);
        $scope.getMenu = function () {
            $scope.res_id = $location.search().id;
            var config = {
                headers: {
                    'user-key': '1cd8ad9c1877866225f7ee09eede4ce8',
                    'Accept': 'application/json'
                }
            };
            $http.get("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + $scope.res_id, config)
                .then(function (response) {
                    $scope.menuimg=response.data;
                    console.log('restaurant',JSON.stringify($scope.menuimg));
                    //First function handles success

                    //generateRestaurantFromResponse(response.data.restaurants);
                }, function (response) {
                    //Second function handles error
                    alert("Something went wrong");
                });

        };
        $scope.getMenu();

        });
