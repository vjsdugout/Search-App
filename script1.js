var app = angular.module('searchFootball', []);
app.controller('searchCtrl', function($scope, $http){
	$scope.getData = function(key){
		if(key.length > 0 && key.trim())
		{
			$http.get('players.json').then(function(response){
			$scope.data = response.data;
			});
		}
		else
		{
			$scope.data = "";
		}
	}
	
});