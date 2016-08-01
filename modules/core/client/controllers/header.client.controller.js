'use strict';

//noinspection JSAnnotator
angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus',
  function ($scope, $state, Authentication, Menus) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    $scope.topNav = {};
    $scope.topNav.isOpen = false;
    $scope.topNav.tooltipDirection = 'left';
    $scope.topNav.items = [
      {
        icon: 'home',
        name: 'Home',
        state: 'home'
      },
      {
        icon: 'view_quilt',
        name: 'Floor Plans & Availability',
        state: 'property'
      },
      {
        icon: 'photo_library',
        name: 'Gallery',
        state: 'gallery'
      },
      {
        icon: 'map',
        name: 'Neighborhood',
        state: 'neighborhood'
      },
      {
        icon: 'contacts',
        name: 'Contacts',
        state: 'contacts'
      }
    ];
    console.log($scope.topNav);
    $scope.log = function () {
      console.log($scope.topNav);
    };

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);
