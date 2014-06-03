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
    }])

.controller('proposalCtrl',['$scope','$timeout',function($scope,$timeout){
        $scope.init = function(){
            $timeout(function(){
                $('#loaderModal').modal('hide');
            },4000);
        }

        $scope.enterFriends = function(){
            window.location.href="#/" + "wishes"
        }

    }])

.controller('wishesCtrl',['$scope','$timeout',function($scope,$timeout){

}]);