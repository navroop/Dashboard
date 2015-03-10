(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('thumbnail', thumbnail);

    thumbnail.$inject = ['$window'];

    /* @ngInject */
    function thumbnail($window) {

        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<div class="col-lg-2 col-md-6 fx-rotate-clock-left fx-speed-500 fx-trigger fx-easing-back" ng-repeat="user in value"> <div class="panel-back"> <div> <div class="row"> <div class="col-xs-12 "> <i class="fa fa-area-chart fa-2x" ng-class="getActiveClass({{user.process}})"> </i> <span class="font20"> {{user.name}}</span><div><span ng-class="getActiveClass({{user.process}})"><b>+{{user.process}}%</b></span><span> {{user.value}}</span></div> </div></div></div><a href="#"> <div class=""> <div class="progress prg-height"> <div class="progress-bar" ng-class="getActiveClass({{user.process}})" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: {{user.process}}%"> </div></div></div></a> </div></div>',
        };
        return directive;

        function link(scope, element) {
            scope.custClass = null;
            scope.getActiveClass = function(data) {
                if (data >= 60 && data <= 79) {
                    return scope.custClass = "info";
                } else if (data < 30) {

                    return scope.custClass = "danger";
                } else if (data >= 30 && data <= 50) {

                    return scope.custClass = "warning";
                } else {
                    return scope.custClass = "success";
                }
            }

        };
    }


})();