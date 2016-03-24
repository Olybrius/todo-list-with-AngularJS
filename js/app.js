function TodoCtrl($scope, filterFilter, $http){
	$scope.todos = [];
	$scope.placeholder = "Chargement ...";

	$http.get('todos.php').success(function(data){
		$scope.todos = data;
		$scope.placeholder = "Ajouter une nouvelle tâche"
	})

	$scope.$watch('todos', function(){
		$scope.remaining = filterFilter($scope.todos, {completed:false}).length;
		$scope.allchecked = !$scope.remaining;
	}, true)

	$scope.removeTodo = function(index){
		$scope.todos.splice(index, 1);
	}

	$scope.addTodo = function(){
		$scope.todos.push({
			name : $scope.newtodo,
			completed : false
		});
		$scope.newtodo = '';
	}

	$scope.checkAllTodo = function(allchecked){
		$scope.todos.forEach(function(todo){
			todo.completed = allchecked;
		})
	}
}