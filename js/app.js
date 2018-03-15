var itunesApp = angular.module("itunesApp", []);


itunesApp.directive('search', function () {
    return function ($scope, element) {
        element.bind("keyup", function (event) {
          var val = element.val();
          if(val.length > 2) {
            $scope.search(val);
          }
        });
    };
});
