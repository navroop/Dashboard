(function() {
    'use strict';

    angular.module('myApp').directive('mytabclick', mytabclick);

    mytabclick.$inject = ['$window'];
    function mytabclick($window) {

        var directive = {
            link : link,
            restrict : 'A',
            scope : {
                key : "@",
                data : "=",
                index:"@"
            }

        };
        return directive;

        function link(scope, element) {
            element.bind("click", function() {
                var flag = "",
                    indx = 0;
                if (scope.data.length != 0) {
                    for (indx in scope.data) {
                        if (scope.data[indx].title == scope.key) {
                            flag = true;
                        }
                    }
                    if (flag == false) {
                        var dashboard = {
                            title : scope.key,
                            content : 'core/partials/' + scope.key + 'partial.html'
                        };
                        scope.$apply(function() {
                            scope.data.push(dashboard);
                             var index = scope.data.length - 1;
                             var elementPos = scope.data.map(function(x) {return x.title; console.log(x.title); }).indexOf(scope.key);
                             scope.data[elementPos].active = true;
                        });
                       
                    } else {
                        scope.$apply(function() {
                        var elementPos = scope.data.map(function(x) {return x.title; console.log(x.title); }).indexOf(scope.key);
                        scope.data[elementPos].active = true;
                        });
                    }
                } else {
                    var dashboard = {
                        title : scope.key,
                        content : 'core/partials/' + scope.key + 'partial.html'
                    };
                    scope.$apply(function() {
                        scope.data.push(dashboard);
                        var index = scope.data.length - 1;
                        scope.data[index].active = true;
                    });

                   
                }

            });
        }

    }

})();
