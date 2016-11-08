angular
  .module('getfeed')
  .controller('InitialController', function($scope, supersonic) {
    $scope.userFilters = [];
    $scope.addFilter = function (filter){
      if ($scope.userFilters.indexOf(filter)>=0){
        $scope.userFilters.splice($scope.userFilters.indexOf(filter),1);
      }
      else {
        $scope.userFilters.push(filter);
      }
    }
  });
