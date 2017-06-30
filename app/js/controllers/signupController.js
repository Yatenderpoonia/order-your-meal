
orderYourMealApp.controller('signupController',
    function signupController($scope, customer, $location,$http) {

        $scope.signup=function () {
            var  signupData={
                "name":$scope.name,
                "email":$scope.email,
                "password":$scope.password
            };
            if(signupData.name && signupData.email && signupData.password){
                $http.post("https://arcane-beyond-17211.herokuapp.com/signup",signupData,{
                    headers: {'Content-Type': 'application/json'}
                }).then(function (response) {
                    console.log(JSON.stringify(signupData));
                    $location.url('/login');
                });
            }

        }
    });
