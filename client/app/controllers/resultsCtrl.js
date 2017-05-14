app.controller('ResultsCtrl', function($scope, $cookies, personFactory, householdFactory) {
	console.log('results ctrl')

	let householdId = $cookies.get('householdId')
	console.log(householdId)

	householdFactory.getHouseholdById(householdId)
	.then((data) => {
		$scope.householdArray = data.data
		$scope.householdSize = data.data[0].peopleArray.length
		$scope.totalResources = data.data[0].totalResources

		if (data.data[0].paysSUA === true) {
			$scope.paysSUA = 'do'
		} else {
			$scope.paysSUA = 'do not'
		}
		console.log($scope.householdSize)
	})
	// personFactory.getPersonByHousehold(householdId)
	// .then((data) => {
	// 	console.log(data)
	// 	$scope.monthlyIncome = data.monthlyIncome
	// })

})
