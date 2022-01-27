(function() {
  'use strict';

  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunch = '';
    $scope.message = '';

    $scope.checkIfTooMuch = function() {
      const LUNCH_ITEMS = $scope.separateLunchItems();

      if (!LUNCH_ITEMS.length) {
        return $scope.message = 'Please enter data first';
      }

      $scope.message = LUNCH_ITEMS.length <= 3 
        ? 'Enjoy!'
        : 'Too much!';
    }

    $scope.separateLunchItems = function() {
      return $scope.lunch
        .split(' ')
        .join('')
        .split(',')
        .filter(function(item) {
          return item != '' && item != ' ';
        });
    }
  }
}
)()
