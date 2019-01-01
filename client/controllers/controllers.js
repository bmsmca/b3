myApp.controller('cartController', function($scope,$route,$routeParams,$http){

	$scope.getcart = function(){
		$http.get('/api/cart/').then(function(response){
			$scope.cart = response.data;
		});
	};

	$scope.showcart = function(){
		var id = $routeParams.id;
		$http.get('/api/cart/'+ id).then(function(response){
			$scope.cart = response.data;
		});
	};

	$scope.addcart = function(){
		$http.post('/api/cart/', $scope.cart).then(function(response){
			window.location.href = '/';
		});
	};

	$scope.updatecart = function(){
		var id = $routeParams.id;
		$http.put('/api/cart/'+ id , $scope.cart).then(function(response){
			window.location.href = '/';
		});
	};
	
	$scope.deletecart = function(id){
		var id = id;
		$http.delete('/api/cart/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});
