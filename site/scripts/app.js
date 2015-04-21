console.log("#IvanR: Cargo app.js");
var modulo1 = 
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		$scope.posts= ["post1 Hola","post2","post3","post4","post5"];
	}]);