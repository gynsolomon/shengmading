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
            $scope.show = false;
            $timeout(function(){
                $('#loaderModal').modal('hide');
            },3000);
            $timeout(function(){
                $scope.show = true;
            },45000);
        };


        $scope.enterFriends = function(){
            window.location.href="#/" + "wishes"
        }

    }])

.controller('wishesCtrl',['$scope','$timeout',function($scope){
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function(i) {
            var addon;
            if(i==3 || i==4){
                addon = '.PNG';
            }else{
                addon = '.JPG';
            }
            slides.push({
                image: 'img/wishes/' + i + addon
                /*text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]*/
            });
        };

        for (var i=0; i<9; i++) {
            $scope.addSlide(i);
        }

}]);