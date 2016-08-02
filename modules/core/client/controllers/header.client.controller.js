'use strict';

//noinspection JSAnnotator
angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', '$mdSidenav',
  function ($scope, $state, Authentication, $mdSidenav) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    $scope.toggleSideNav = function () {
      $mdSidenav('pr-sidenav').toggle();
      console.log('toggling nav');
    };

    $scope.topNav = {};
    $scope.topNav.isOpen = false;
    $scope.topNav.tooltipDirection = 'down';

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);
