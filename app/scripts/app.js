define(['common'], function (angularAMD) {

  'use strict';

  var app = angular.module('angularAmdSample', [
    'ui.router'
  ]);

  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    configureRoutes
  ]);

  var onChangeConfig = [
    '$rootScope',
    '$state',
    function ($rootScope, $state) {

      $rootScope.$on('$stateChangeStart', function (event, toState) {
        if (toState.name === "users") {
          event.preventDefault();
          $state.go('users.list');
        }
      });

    }
  ];

  app
    .run(onChangeConfig);

  function configureRoutes ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', angularAMD.route({
        url: '/home',
        templateUrl: 'views/home.html',
        controllerUrl: 'main/home_ctrl'
      }))
      .state('rooms', angularAMD.route({
        url: '/rooms',
        templateUrl: 'views/rooms.html',
        controllerUrl: 'rooms/rooms_ctrl'
      }))
      .state('users', angularAMD.route({
        url: '/users',
        templateUrl: 'views/users.html',
        controllerUrl: 'users/users_ctrl'
      }))
      // To configure default subroute
      .state('users.list', {
        url: '/list',
        templateUrl: 'views/users/list.html'
      });

    // Else
    $urlRouterProvider
      .otherwise('/home');

  }

  return angularAMD.bootstrap(app);
});
