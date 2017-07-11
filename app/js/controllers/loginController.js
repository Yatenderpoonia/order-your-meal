
orderYourMealApp.controller('loginController',
    function loginController($scope, customer,$http,$location,localStorage,$rootScope) {
        $scope.res_name = $location.search().name;
        $scope.res_address = $location.search().address;
        $scope.res_id=$location.search().id;
        $scope.loadResturants=true;
        if($scope.showLoader)
        {
            $scope.loadResturants=false;
        }
    $scope.signup=function () {
        NProgress.start();
        if($scope.res_name && $scope.res_address) {
            $location.url('/signup?name=' + $scope.res_name + '&address=' + $scope.res_address + '');
            NProgress.done();
        }
        else {
            $location.url('/signup');
            NProgress.done();
        }
        };
    $scope.login=function () {
        NProgress.start();
       var  loginData={
            "email":$scope.email,
            "password":$scope.password
        };
       if(loginData.email && loginData.password){
           $http.post("https://arcane-beyond-17211.herokuapp.com/login",loginData,{
               headers: {'Content-Type': 'application/json'}
           }).then(function (response) {
               if (response.data.isSuccess === true) {
                   $scope.showLoader=true;
                   localStorage.setItem('userId', JSON.stringify(response.data.id));
                   localStorage.setItem('userName', JSON.stringify(response.data.name));
                   $rootScope.loginShow=false;
                   $rootScope.logoutShow = true;
                   NProgress.done();
                   if($scope.res_name && $scope.res_address) {
                       BootstrapDialog.alert('Welcome! ' + response.data.name + ' Please fill your payment details');
                       $location.url('/checkout?name=' + $scope.res_name + '&address=' + $scope.res_address +'&id='+$scope.res_id+ '');
                   }
                   else{

                       $location.path('/');
                       $rootScope.loginShow=false;
                       $rootScope.logoutShow = true;
                       NProgress.done();
                       //location.reload();
                   }

               }
           }, function(response) {
               {NProgress.start();
                   BootstrapDialog.alert('Invalid email or password');
                   NProgress.done();

               }
           });
       }
    }
    });