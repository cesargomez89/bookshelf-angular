'use strict';

angular.module('bookshelfAngularApp')
  .controller('UsersCtrl', function ($scope, User) {

    $scope.save = function(form){
      if(form){
        User.save($scope.user, function(response){
          console.log(response);
        }, function(response){
          console.log(response);
        });
      }
    };

  });
