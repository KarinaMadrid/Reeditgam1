console.log("#KaryM: Cargo app.js");
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

		//METODO DEL CONTROLADOR
		$scope.addPost = function() {
			if(!$scope.title || $scope.title === "")
			{
				alert("NO se permite postear titulos vacios")
				return;
			}
			$scope.posts.push(
				{title: $scope.title, 
				upvotes: 0});
			//twp.way data binding
			$scope.title="";

		};
	}]);