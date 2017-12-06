
orderYourMealApp.controller('otpController',
    function otpController($scope, customer,$http,$location,localStorage,$rootScope) {
    $scope.otp='';
    http.get('https://control.msg91.com/api/verifyRequestOTP.php?authkey=165827A4FspKV8596ddc84&mobile='+$rootScope.mobile+'&otp='+$scope.otp)
        .then(function (response) {
if(response.data.type==='success'){

}
        });

    });