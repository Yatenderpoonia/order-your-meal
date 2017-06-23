

orderYourMealApp.controller('feedBackController',
    function FeedBackController($scope, customer, $location) {
       $scope.submitButtton = function () {
           if($scope.name.length > 0) {
               alert('ThankYou ' + $scope.name + ' Your feedback has been saved.');
               $location.url('/');
           }
}

    });
