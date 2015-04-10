'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:InterestsCtrl
 * @description
 * # InterestsCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('InterestsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('./model/info.json').success(function (data, status, headers, config) {
      $scope.int = data.interests;
    })
      .error(function (data, status, headers, config) {

      });
  });
