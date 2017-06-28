

orderYourMealApp.controller('feedBackController',
    function FeedBackController($scope, customer, $location,$http) {
    var mydata={};
       $scope.submitButtton = function () {
             mydata={
               "name":$scope.name,
               "email":$scope.email,
               "mobile":$scope.mobile,
               "message":$scope.message
           };
           console.log(JSON.stringify(mydata));
           $http.post("https://arcane-beyond-17211.herokuapp.com/feedback",mydata,{
               headers: {'Content-Type': 'application/json'}
           }).then(function (response) {

           });
           if($scope.name.length > 0) {
               alert('ThankYou ' + $scope.name + ' Your feedback has been saved.');
               $location.url('/');
           }
}

    });
