/**
 * Created by solomon on 14-6-3.
 */
'use strict';

angular
    .module('myApp', [
        'ngRoute',
        'ui.bootstrap',
        'myApp.controllers',
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',{redirectTo: '/choujiang'});
        $routeProvider.when('/choujiang', {templateUrl: 'partials/shengmading.html'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
