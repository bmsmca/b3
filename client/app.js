var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'cartController'
		})
		.when('/cart', {
			templateUrl:'templates/list.html',
			controller:'cartController'
		})
		.when('/cart/add', {
			templateUrl:'templates/add.html',
			controller:'cartController'
		})
		.when('/cart/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'cartController'
		})
		.when('/cart/:id/show', {
			templateUrl:'templates/show.html',
			controller:'cartController'
		});
});
