(function() {
	'use strict';
	angular.module('myApp').controller('LoginController', ['$scope', '$http','$location',
	function($scope, $http,$location) {
		$scope.submitt = function(data) {
		    if(data !== undefined){
		    if(data.username == "admin" && data.password == "admin"){
			$location.path('/Dashboard');
			}
			else{
			    alert("Not valid User");
			}
			}
		}
	}]);
})(); 