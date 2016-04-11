/* 
 * Copyright 2016 snipking.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

window.cordovaApp = angular.module('myApp', [
    'ngRoute',
    'onsen',
    'onsen.directives'
]);

window.cordovaApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'pages/page1.html'
                })
                .otherwise({
                    templateUrl: 'index.html'
                });
    }]);

window.cordovaApp.controller("rootController", ['$scope', '$window', '$http', function ($scope, $window, $http) {

    }]);