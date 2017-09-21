(function(angular) {
    'use strict';
    // Declare app level component which depends on view, and controller 
    
    angular.module('myApp')
    /* Create component for header */
    .component('myHeader',{
    	templateUrl:'components/header/view/htmlpage.html'
    });
 

})(window.angular);