(function() {
	'use strict';
	angular.module('myApp').controller('LoginController', ['$scope', '$http','$location',
	function($scope, $http,$location) {
		$scope.submitt = function() {
			$location.path('/Dashboard');
		}
	}]);
})(); 