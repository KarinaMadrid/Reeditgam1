console.log("#IvanR: Cargo app.js");
var modulo1 = 
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		$scope.posts = [{title: "Post 1", upvotes: 5},
		{title: "Post 2", upvotes: 15},
		{title: "Post 3", upvotes: 20},
		{title: "Post 4", upvotes: 25},
		{title: "Post 5", upvotes: 35},
		{title: "Post 6", upvotes: 45}];
	}]);