angular
  .module('example')
  .controller('InitialController', function($scope, supersonic) {
    $scope.energyLevels = ["low","some","a lot of","tons of"];
    $scope.moods= ["Joyful","Stressed","Adventurous", "Alone", "Introspective"];
    $scope.eventTypes= ["Do", "Eat", "Watch"];
  });
