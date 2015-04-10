'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # EduCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('EduCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('./model/info.json').success(function (data, status, headers, config) {
      $scope.data = data;
    })
      .error(function (data, status, headers, config) {

      });
  });
