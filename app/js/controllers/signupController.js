
orderYourMealApp.controller('signupController',
    function signupController($scope, customer, $location,$http,localStorage) {
        $scope.res_name = $location.search().name;
        $scope.res_address = $location.search().address;
        $scope.res_id = $location.search().id;
        $scope.otp='';


        $scope.signup=function () {
            NProgress.start();
            $http.get('http://control.msg91.com/api/sendotp.php?authkey=165827A4FspKV8596ddc84&mobile='+$scope.mobile+'&sender=OYMEAL',{'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }}).then(function (response) {

                });
            localStorage.setItem('name',$scope.name);
            localStorage.setItem('mobile',$scope.mobile);
            localStorage.setItem('password',$scope.password);
            $location.path('/otp');
            NProgress.done();

        };
        $scope.otpconfirm=function () {
            NProgress.start();
            $http.get('http://control.msg91.com/api/verifyRequestOTP.php?authkey=165827A4FspKV8596ddc84&mobile='+localStorage.getItem('mobile')+'&otp='+$scope.otp+'&sender=OYMEAL', {'headers': {
                'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }}).then(function (response) {
                    if(response.data.type==='success'){
                        alert(response.data.message);
                        var  signupData={
                            "name":localStorage.getItem('name'),
                            "mobile":localStorage.getItem('mobile'),
                            "password":localStorage.getItem('password')
                        };
                        if(signupData.name && signupData.mobile && signupData.password){
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
                    else {
                        alert(response.data.message);
                    }
                });
        }
    });
