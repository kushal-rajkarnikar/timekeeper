angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
    }, 1000);
  };
})

.controller('ThisWeekCtrl', function($scope, $ionicPopup){
  $scope.playlists = [
  { title: 'Monday', login_time: "9:00", logout_time: "6:00", id: 1 },
  { title: 'Tuesday', login_time: "9:13", logout_time: "6:05", id: 2 },
  { title: 'Wednesday', login_time: "9:02", logout_time: "6:00", id: 3 },
  { title: 'Thursday', login_time: "9:09", logout_time: "5:45", id: 4 },
    // { title: 'Friday', login_time: "9:11", logout_time: "6:25", id: 5 },    
    ];

  // $scope.attendanceToggleModel = {
  //    status1 : 'Sign In'       ,
  //    status2 : 'Sign Out'
  //  };


 
  // An alert dialog
  $scope.attendance = function() {

    var attendance = $ionicPopup.alert({
     title: 'Signed In',
     template: 'You signed in at 9:06am.'
   });
   attendance.then(function(res) {
     console.log('User signed in at 9:06am.');
   });
 };



})

.controller('PlaylistsCtrl', function($scope) {


 $scope.date = new Date();

 $scope.playlists = [
 { title: 'Monday', login_time: "9:00", logout_time: "6:00", id: 1 },
 { title: 'Tuesday', login_time: "9:13", logout_time: "6:05", id: 2 },
 { title: 'Wednesday', login_time: "9:02", logout_time: "6:00", id: 3 },
 { title: 'Thursday', login_time: "9:09", logout_time: "5:45", id: 4 },
    // { title: 'Friday', login_time: "9:11", logout_time: "6:25", id: 5 },    
    ];
  })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
