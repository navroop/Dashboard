angular.module('myApp').config(['$routeProvider', function($routeProvider) {
    
  $routeProvider.
  when('/', {
    templateUrl: 'core/partials/login.html',
    controller: 'LoginController'
  }).
  when('/Dashboard', {
    templateUrl: 'core/partials/Dashboard.html',
    controller:'DashboardController'
  }).
  when('/SignUp', {
    templateUrl: 'core/partials/signup.html',
  }).
  otherwise({
    redirectTo: '/'
  });
}]);