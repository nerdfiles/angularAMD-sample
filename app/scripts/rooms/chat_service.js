define(['app'], function (app) {
  'use strict';
  app.factory('ChatService', ['Restangular', function (Restangular) {

    var channels = Restangular.all('channels');

    // Simulate a service
    return {
      getChannels: function () {
        return channels.getList()
      },
      getRooms: function () {
        return 'From chat_service: Here is a list of rooms';
      }
    };
  }]);
});
