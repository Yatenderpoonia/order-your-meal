
orderYourMealApp.controller('loginController',
    function loginController($scope, customer, $location,$http, localStorage) {

    $scope.signup=function () {
        $location.url('/signup');
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
               console.log(response.data.id);
               if (response.data.isSuccess === true) {
                   //window.localStorage['getid']=
                   localStorage.setItem('userId', JSON.stringify(response.data.id));
                   console.log(localStorage.getItem('userId'));
                   console.log(response.data);
                   console.log("Login sucessfully");
                   BootstrapDialog.alert('Welcome! Please fill your payment details');
                   $location.url('/checkout')
               }
           }, function(response) {
               {
                   BootstrapDialog.alert('Invalid email or password');

               }
           });
       }

    }
    });