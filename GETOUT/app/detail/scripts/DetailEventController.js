angular
.module('detail')
  .controller('DetailEventController', function ($scope, $window, supersonic) {
    var stopListening = supersonic.ui.views.current.params.onValue(function (params) {
        $scope.currentEvent = params;

        $scope.lat = parseFloat($scope.currentEvent.lat);
        $scope.lng = parseFloat($scope.currentEvent.lng);

    });
    stopListening();
  });
