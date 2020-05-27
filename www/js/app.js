// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'pdf'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('start', {
      url: '/',
      templateUrl: 'start.html',
      controller: 'StartCtrl'
    })
    .state('stop', {
      url: '/stop',
      templateUrl: 'stop.html',
      controller: 'StopCtrl'
    })
    .state('finish', {
      url: '/finish',
      templateUrl: 'finish.html',
      controller: 'FinishCtrl'
    });

   $urlRouterProvider.otherwise("/");

})

.factory('Authorization', function() {

  authorization = {};
  authorization.firstName = "";
  authorization.workStation = "";
  authorization.OKparts = "";
  authorization.NOKparts = "";
  authorization.NumberOfParts = "";
  authorization.startTime = "";
  authorization.finishTime = "";
  authorization.suspendParts = "";

  return authorization;
})

.controller('StartCtrl', function($scope,  Authorization, $filter, $cordovaFileTransfer, $ionicPlatform) {
  $scope.input = Authorization;

  $scope.showStartTime = function() {
    $scope.input.startTime = $filter('date')(new Date(), 'h:mm:ss');
};

})


.controller('StopCtrl', function($scope, Authorization, $filter) {
  $scope.input = Authorization;

  $scope.showFinishTime = function() {
    //$scope.input.time1 = new Date();
    $scope.input.finishTime = $filter('date')(new Date(), 'h:mm:ss');
}
})

.controller('FinishCtrl', function($scope, Authorization, $ionicPopup, $timeout, $state, $window) {
  $scope.input = Authorization;

   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Potvrdi',
       template: 'Ukupno pregledanih delova ' + $scope.input.NumberOfParts +
                  '<br>Broj OK delova ' + $scope.input.OKparts +
                  '<br>Broj NOK delova ' + $scope.input.NOKparts +
                  '<br>Suspendovani delovi ' + $scope.input.suspendParts
     });
     confirmPopup.then(function(res) {
       if(res) {
        $state.go('start');
         console.log('You are sure');
         $window.location.reload(true);
       } else {
         console.log('You are not sure');
       }
     });
   };
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
