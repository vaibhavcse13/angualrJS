var app  = angular./**
* po Module
*
* Description
*/
module('app', []);

app.controller('demoCtrl', ['$scope', function($scope){
	
	$scope.name = "vaibhav shukla";
	$scope.num1 = 0;
	$scope.num2 = 0;

	$scope.add=  function(){
		$scope.result = $scope.num1 + $scope.num2;
	}
}])