'use strict';

angular.module('core')
  .directive('prSidenav', ['$mdSidenav', 'Menus', function ($mdSidenav, Menus) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'modules/core/client/views/prSidenav.html',
      link: function (scope, element, attrs) {
        $mdSidenav('pr-sidenav').open();

        scope.close = function () {
          $mdSidenav('pr-sidenav').close();
        };

        scope.menu = Menus.getMenu('pr-nav');
      }
    };
  }]);
