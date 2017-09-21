(function(angular) {
    'use strict';
    // Declare app level module  which depends on views, and controller 
    function HeroListController($scope, $element, $attrs) {
        var ctrl = this;

    }
    angular.module('myApp')
        /* Create component for content */
        .component('myContent', {
            templateUrl: 'components/content/view/htmlpage.html',
            controller: HeroListController
        });


})(window.angular);