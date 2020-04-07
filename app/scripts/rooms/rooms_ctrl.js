define(['rooms/chat_service'], function () {
  'use strict';
  return ['$scope', '$timeout', 'ChatService', function ($scope, $timeout, ChatService) {

    $scope.message = 'Shows a list of chat rooms';

    $scope.rooms = ChatService.getRooms();

    ChatService.getChannels().then(function (res) {
      var _embedded = res._embedded;
      $scope.channels = _embedded.channels;
    }).catch(function (err) {
      console.log({ error: err });
      $scope.error = err;
    });
  }];
});
