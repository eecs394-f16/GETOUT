angular
  .module('getfeed')
  .controller('MapController', function($scope, supersonic) {
    $scope.geolocationlat = null;
    $scope.geolocationlng = null;
    $scope.testEvents = null;
    supersonic.bind($scope, "geolocationlat");
    supersonic.bind($scope, "geolocationlng");
    supersonic.bind($scope, "testEvents");

  })
