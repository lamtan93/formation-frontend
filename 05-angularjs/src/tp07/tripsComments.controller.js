export default class CommentController{

	constructor($scope, $http, $log, TripService,StepsService, apiUrls){

		this.$scope = $scope;
		this.$http = $http;
		this.$log = $log;
		this.TripService = TripService;
		this.StepsService = StepsService;
		//this.CommentsService = CommentsService;
		this.apiUrls = apiUrls;

		this.tabTrips = [];
		this.tabTripsSteps = [];
		
	}

	$onInit(){
		this.TripService.findAll().then((dataDuServeur) => {
			this.tabTrips = dataDuServeur
			console.log(this.tabTrips)
		});
	}	


	findStepsByTripId(tripIdChoisi){

		this.StepsService.findStepsByTripId(tripIdChoisi)
		.then((resm)=>{
			this.tabTripsSteps = resm;
		})
	}




}


CommentController['$inject'] = ['$scope','$http', '$log', 'TripService', 'StepsService', 'apiUrls'];


