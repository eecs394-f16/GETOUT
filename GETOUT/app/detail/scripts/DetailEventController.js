angular
  .module('detail')
  .controller('DetailEventController', function ($scope, supersonic) {
      var stopListening = supersonic.ui.views.current.params.onValue(function (params) {
          $scope.currentEvent = params;
      });
      stopListening();
  });
