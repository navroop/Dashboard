(function() {
	'use strict';
	angular.module('myApp').controller('DashboardController', ['$scope', '$http', '$interval', '$timeout', 'userService',
	function($scope, $http, $interval, $timeout, userService) {

		$scope.users = userService.getTab();
		$scope.navsitem = userService.getNav();
		$scope.list = userService.getList();
		$scope.myData = userService.getGrid();
		$scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-default ng-btn" ng-click="edit(row)" >view</button> ';
		$scope.myOptions = {
			data : 'myData',
			columnDefs : [{
				field : 'From',
				displayName : 'From'
			}, {
				field : 'Contact',
				displayName : 'Contact'
			}, {
				field : 'Amount',
				displayName : 'Amount'
			}, {
				displayName : '',
				cellTemplate : $scope.editableInPopup
			}]
		};
		$scope.tabs = [{
			title : 'Dashboard',
			content : 'core/partials/Dashboardpartial.html'
		}];
		
		$scope.removeTab = function(index) {
			$scope.tabs.splice(index, 1);
		};
		
        $interval(function() {
            $('.cog').addClass('glyphicon-refresh-animate');
            $timeout(function() {
                $('.cog').removeClass('glyphicon-refresh-animate');
            }, 3000);
            $scope.users = userService.getTab();
            $scope.navsitem = userService.getNav();
            $scope.list = userService.getList();
            $scope.myData = userService.getGrid();
            
        }, 10000); 
               
	}]);
})();
