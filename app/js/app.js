'use strict';

var orderYourMealApp = angular.module('orderYourMealApp', ['ngResource']);

orderYourMealApp.config(function($routeProvider) {

  $routeProvider.
      when('/resturants', {
        controller: 'RestaurantsController',
        templateUrl: 'views/restaurants.html'
      }).
      when('/menu', {
        controller: 'MenuController',
        templateUrl: 'views/menu.html'
      }).
      when('/checkout', {
        controller: 'CheckoutController',
        templateUrl: 'views/checkout.html'
      }).
      when('/thank-you', {
        controller: 'ThankYouController',
        templateUrl: 'views/thank-you.html'
      }).
      when('/', {
        controller: 'CustomerController',
        templateUrl: 'views/customer.html'
      }).
      when('/who-we-are', {
        templateUrl: 'views/who-we-are.html'
      }).
      when('/how-it-works', {
        templateUrl: 'views/how-it-works.html'
      }).
      when('/help', {
        templateUrl: 'views/help.html'
      }).
      when('/feed', {
          templateUrl: 'views/feed.html',
          controller:'feedBackController'
  });
});
