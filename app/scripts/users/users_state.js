define(['angularAMD', 'app'], function (angularAMD, app) {

  'use strict';

  angularAMD.config([
    '$stateProvider',
    '$urlRouterProvider',
    configureRoutes
  ])

  function configureRoutes ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('users.search', {
        url: '/search',
        templateUrl: 'views/users/search.html'
      })
      .state('users.favorites', {
        url: '/favorites',
        templateUrl: 'views/users/favorites.html'
      });
  }
});
