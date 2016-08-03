angular.module('tracker',[]);

angular.module('tracker').directive('itracker',[
	function(){
		return {
			restrict: 'C',
			controller: ['$scope', function($scope){
				$scope.makePlayer = function(){
					return {
						'name': '',
						'init': 0
					};
				};

				$scope.players = [];

				$scope.addPly = function(){
					$scope.players.push($scope.makePlayer());
				};

				$scope.sort = function(){
					$scope.players = $scope.players.sort(function(a,b){
						if(a.init > b.init) return -1;
						if(a.init < b.init) return 1;
						return 0;
					})
				};

				$scope.remove = function(index){
					$scope.players.splice(index,1);
				};

				$scope.next = function(){
					$scope.players.push($scope.players.shift());
				};

				for(var i =0; i < 5; i++) $scope.addPly();
			}],
			templateUrl: 'view.html'
		}
	}]);