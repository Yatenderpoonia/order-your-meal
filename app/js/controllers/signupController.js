
orderYourMealApp.controller('signupController',
    function signupController($scope, customer, $location,$http) {
        $scope.res_name = $location.search().name;
        $scope.res_address = $location.search().address;

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
                    if($scope.res_name && $scope.res_address) {
                        console.log(JSON.stringify(signupData));
                        $location.url('/login?name=' + $scope.res_name + '&address=' + $scope.res_address + '');
                    }
                    else
                    {
                        $location.url('/login');
                    }
                });
            }

        }
    });
