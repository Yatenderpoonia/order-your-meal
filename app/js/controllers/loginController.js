
orderYourMealApp.controller('loginController',
    function loginController($scope, customer, $location,$http, localStorage,$rootScope) {
        $scope.res_name = $location.search().name;
        $scope.res_address = $location.search().address;
    $scope.signup=function () {
        if($scope.res_name && $scope.res_address) {
            $location.url('/signup?name=' + $scope.res_name + '&address=' + $scope.res_address + '');
        }
        else {
            $location.url('/signup')
        }
        };
    $scope.login=function () {
       var  loginData={
            "email":$scope.email,
            "password":$scope.password
        };
       if(loginData.email && loginData.password){
           $http.post("https://arcane-beyond-17211.herokuapp.com/login",loginData,{
               headers: {'Content-Type': 'application/json'}
           }).then(function (response) {
               if (response.data.isSuccess === true) {
                   //window.localStorage['getid']=
                   localStorage.setItem('userId', JSON.stringify(response.data.id));
                   localStorage.setItem('userName', JSON.stringify(response.data.name));
                   $rootScope.loginShow=false;
                   $rootScope.logoutShow = true;
                   console.log(localStorage.getItem('userName'));
                   console.log(localStorage.getItem('userId'));
                   console.log(response.data);
                   console.log("Login sucessfully");
                   if($scope.res_name && $scope.res_address) {
                       BootstrapDialog.alert('Welcome! ' + response.data.name + ' Please fill your payment details');
                       $location.url('/checkout?name=' + $scope.res_name + '&address=' + $scope.res_address + '');
                   }
                   else{
                       $location.path('/');
                       $rootScope.loginShow=false;
                       $rootScope.logoutShow = true;
                       //location.reload();
                   }

               }
           }, function(response) {
               {
                   BootstrapDialog.alert('Invalid email or password');

               }
           });
       }
    }
    });