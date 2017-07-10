

orderYourMealApp.controller('feedBackController',
    function FeedBackController($scope, customer, $location,$http) {
    var mydata={};
       $scope.submitButtton = function () {
           NProgress.start();
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
               NProgress.done();
           });
           if(mydata.name&&mydata.email&&mydata.message) {
               BootstrapDialog.alert('ThankYou! ' + $scope.name + ' Your feedback has been saved.');
               $location.url('/');
               NProgress.done();
           }
}

    });
