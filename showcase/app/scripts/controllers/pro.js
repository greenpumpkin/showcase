'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:ProCtrl
 * @description
 * # ProCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('./model/info.json').success(function (data, status, headers, config) {
      $scope.pro = data.professionalExperience;
    })
      .error(function (data, status, headers, config) {

      });
  });
