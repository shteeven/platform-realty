'use strict';

angular.module('core').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('pr-nav', {
      title: 'Home',
      state: 'home',
      roles: ['*']
    });

    Menus.addMenuItem('pr-nav', {
      title: 'Availability/Pricing',
      state: 'availability',
      roles: ['*']
    });

    Menus.addMenuItem('pr-nav', {
      title: 'Neighborhood',
      state: 'neighborhood',
      roles: ['*']
    });

    Menus.addMenuItem('pr-nav', {
      title: 'Gallery',
      state: 'gallery',
      roles: ['*']
    });

    Menus.addMenuItem('pr-nav', {
      title: 'Contact Us',
      state: 'contact',
      roles: ['*']
    });
  }
]);
