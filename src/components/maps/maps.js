'use strict';

// Imports
var angular = require('angular');
var MapsCtrl  = require('./controllers/mapsCtrl');
var mapDirective  = require('./directives/map');

// Home sub-module definition
var maps = angular.module('app.maps', []);
maps.controller('MapsCtrl', ['$ionicLoading', MapsCtrl]);
maps.directive('map', [mapDirective]);

module.exports = maps;