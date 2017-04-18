

orderYourMealApp.controller('feedBackController',
    function FeedBackController($scope, customer, $location) {

       $scope.submit = function () {

           alert('ThankYou '+$scope.name+' Your feedback has been saved.');
       }
    });
