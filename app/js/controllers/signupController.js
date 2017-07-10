
orderYourMealApp.controller('signupController',
    function signupController($scope, customer, $location,$http) {
        $scope.res_name = $location.search().name;
        $scope.res_address = $location.search().address;
        $scope.res_id = $location.search().id;


        $scope.signup=function () {
            NProgress.start();
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
                        $location.url('/login?name=' + $scope.res_name + '&address=' + $scope.res_address+'&id='+$scope.res_id + '');
                        NProgress.done();
                    }
                    else
                    {
                        $location.url('/login');
                        NProgress.done();
                    }
                });
            }

        }
    });
