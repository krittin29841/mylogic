angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
        $scope.closeLogin();
    },1000);
    };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('DashCtrl', function($scope, Lectures) {

    Lectures.getData(function(data){
        console.log(data);
        $scope.Lecture = data;

        if($scope.Lecture[0].data[0].day == "Mon") $scope.dayColor = "#F9BF3B";
        if($scope.Lecture[0].data[0].day == "Tue") $scope.dayColor = "#E08283";
        if($scope.Lecture[0].data[0].day == "Wed") $scope.dayColor = "#1BBC9B";
        if($scope.Lecture[0].data[0].day == "Thu") $scope.dayColor = "#E87E04";
        if($scope.Lecture[0].data[0].day == "Fri") $scope.dayColor = "#22A7F0";
        if($scope.Lecture[0].data[0].day == "Sat") $scope.dayColor = "#913D88";
        console.log('dColor : ' + $scope.dayColor);
        console.log('dColor : ' + $scope.Lecture[0].data[0].day);
        //$scope.dayColor = dColor;
    });

    Lectures.getMidterm(function(data){
        console.log("log data : "+data);
        $scope.Midterm = data;

        console.log("mid_test: "+$scope.Midterm);
        if($scope.Midterm[0].data[0].mid_month == "1") var month = "Jan";
        if($scope.Midterm[0].data[0].mid_month == "2") var month = "Feb";
        if($scope.Midterm[0].data[0].mid_month == "3") var month = "Mar";
        if($scope.Midterm[0].data[0].mid_month == "4") var month = "Apr";
        if($scope.Midterm[0].data[0].mid_month == "5") var month = "May";
        if($scope.Midterm[0].data[0].mid_month == "6") var month = "Jun";
        if($scope.Midterm[0].data[0].mid_month == "7") var month = "Jul";
        if($scope.Midterm[0].data[0].mid_month == "8") var month = "Aug";
        if($scope.Midterm[0].data[0].mid_month == "9") var month = "Sep";
        if($scope.Midterm[0].data[0].mid_month == "10") var month = "Oct";
        if($scope.Midterm[0].data[0].mid_month == "11") var month = "Nov";
        if($scope.Midterm[0].data[0].mid_month == "12") var month = "Dec";

        $scope.mid_m = month;
        console.log("M : "+month);


    });

    Lectures.getFinal(function(data){
        console.log("log data : "+data);
        $scope.Final = data;

        console.log("final_test: "+$scope.Final);
        if($scope.Final[0].data[0].final_month == "1") var month = "Jan";
        if($scope.Final[0].data[0].final_month == "2") var month = "Feb";
        if($scope.Final[0].data[0].final_month == "3") var month = "Mar";
        if($scope.Final[0].data[0].final_month == "4") var month = "Apr";
        if($scope.Final[0].data[0].final_month == "5") var month = "May";
        if($scope.Final[0].data[0].final_month == "6") var month = "Jun";
        if($scope.Final[0].data[0].final_month == "7") var month = "Jul";
        if($scope.Final[0].data[0].final_month == "8") var month = "Aug";
        if($scope.Final[0].data[0].final_month == "9") var month = "Sep";
        if($scope.Final[0].data[0].final_month == "10") var month = "Oct";
        if($scope.Final[0].data[0].final_month == "11") var month = "Nov";
        if($scope.Final[0].data[0].final_month == "12") var month = "Dec";

        $scope.final_m = month;
        console.log("M : "+month);

        console.log('FinalColor : ' + $scope.FinalColor);
        console.log('scopeFColor : ' + $scope.Final[0].data[0].week);
    });


})


.controller('MyCtrl', function($scope) {
  $scope.myTitle = 'This header hides the content below';
})
.controller('MidCtrl', function($scope, $stateParams) {
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
