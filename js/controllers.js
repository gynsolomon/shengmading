/**
 * Created by solomon on 14-6-3.
 */
'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngResource', 'ngRoute', 'ngSanitize'])
.controller('smdCtrl',['$scope',function($scope){
        $scope.enterMain = function(){
            window.location.href="#/" + "proposal"
        }
    }]);