'use strict';

/**
 * Router class
 */
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('maps', {
    url: '/',
    templateUrl: 'components/maps/controllers/maps.html',
    controller: 'MapsCtrl as vm'
  });

  $urlRouterProvider.otherwise('/');
}

module.exports = Router;