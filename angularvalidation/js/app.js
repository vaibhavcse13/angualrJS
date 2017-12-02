//app name 
var formValidApp =  angular.module('formValidApp' , []);

// contoller for app 
formValidApp.controller('regestrationCtrl', ['$scope', 
	function($scope){
	
	$scope.register =  function(){
		$scope.message = "Welcome " + $scope.user.firstname;
	}

}]);