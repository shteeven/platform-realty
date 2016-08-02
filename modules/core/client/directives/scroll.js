'use strict';
//noinspection JSAnnotator
/**
 * Created by stevenbarnhurst on 8/1/16.
 * This checks to see if the first element is scrolling and how far it is.
 * No fixed elements should be in the first postion of the element this
 * directive is attached to.
 */
angular.module('core').directive('scrollspyNav', function ($window) {
  return function (scope, element, attrs) {

    var mastheadOffset = -(element[0].children[0].offsetHeight - element[0].children[1].offsetHeight);

    element.bind('scroll', function () {
      var elementScroll = element[0].children[0].getBoundingClientRect().top;
      // console.log(element[0].children[0].getBoundingClientRect().top);
      // console.log(element[0].children[0]);
      // console.log();

      if (mastheadOffset > elementScroll) {
        scope.scrolling = true;
      } else {
        scope.scrolling = false;
      }
      scope.$apply();
    });
  };
});