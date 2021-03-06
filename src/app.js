// imports
var angular = require('angular');
require('angular-sanitize');
require('ionic-npm/js/ionic.bundle.min');
require('angular-ui-router');
require('angular-animate');
//require('ng-cordova');

// Application routing and startup
var Router  = require('./router');
var startUp = require('./startUp');

// Application modules
require('./components/maps/maps');

// application definition
var app = angular.module('app', [
	'ionic',
	'app.maps'
]);

// application routing configuration
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	Router
]);

app.run(startUp);