(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('listcheck', listcheck);

    listcheck.$inject = ['$window'];
    function listcheck($window) {

        var directive = {
            link: link,
            restrict: 'E',
           scope: {
                lists: '='
                
            },
            template: '<div class="checkbox" ng-repeat="idx in lists"><label><input type="checkbox" value="">{{idx.list}}</label></div>',
        };
        return directive;
        
        function link(scope, element) {
    			 scope.$watch("lists", function () {	
				    element.parent().parent().find('.glyphicon').addClass('glyphicon-refresh-animate');
				    window.setTimeout(function(){ element.parent().parent().find('.glyphicon').removeClass('glyphicon-refresh-animate'); }, 3000);
				}, true);
				
			   
        }
    }

})();
