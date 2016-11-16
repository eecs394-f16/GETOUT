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
    };

    $scope.energySlider = {
      minValue: 3,
      maxValue: 7,
      options: {
        floor: 1,
        ceil: 10,
        step: 1,
        showTicksValues: true,
        stepsArray: [
          {value: 1, legend: 'Chill'},
          {value: 2},
          {value: 3},
          {value: 4},
          {value: 5},
          {value: 6},
          {value: 7},
          {value: 8},
          {value: 9},
          {value: 10, legend: 'Rage'},
        ]
      }
    };
    $scope.initializeFeed = function(){
      var view = new supersonic.ui.View("getfeed#index");
      $scope.filterRequest = {};
      $scope.filterRequest.filters = $scope.userFilters;
      $scope.filterRequest.energyLevelMax= $scope.energySlider.maxValue;
      $scope.filterRequest.energyLevelMin= $scope.energySlider.minValue;
      supersonic.ui.layers.push(view, { params: $scope.filterRequest });
    }
  });
