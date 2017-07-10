'use strict';

var orderYourMealApp = angular.module('orderYourMealApp', ['ngResource','ngStorage','angularSpinner']);

NProgress.configure({ easing: 'ease', speed: 1000 });
NProgress.configure({ trickle: false });
NProgress.configure({ trickleSpeed: 200 });
NProgress.configure({ showSpinner: true });
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
  when('/login', {
      templateUrl: 'views/login.html',
      controller:'loginController'
  }).
  when('/signup', {
      templateUrl: 'views/Signup.html',
      controller:'signupController'
  }).
      when('/help', {
        templateUrl: 'views/help.html'
      }).
      when('/feed', {
          templateUrl: 'views/feed.html',
          controller:'feedBackController'
  });
});
