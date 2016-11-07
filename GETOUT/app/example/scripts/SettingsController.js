angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    $scope.navbarTitle = "Settings";
    $scope.energyLevels = ["low","some","a lot of","tons of"];
    $scope.mood= ["Joyful","Stressed","Adventurous", "Alone", "Introspective"];
    $scope.eventType= ["Do", "Eat", "Watch"];
  });
