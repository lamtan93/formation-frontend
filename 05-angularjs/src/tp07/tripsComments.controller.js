export default class CommentController{

	constructor($scope, $http, $log, TripService,StepsService,CommentsService, apiUrls){

		this.$scope = $scope;
		this.$http = $http;
		this.$log = $log;
		this.TripService = TripService;
		this.StepsService = StepsService;
		this.CommentsService = CommentsService;
		this.apiUrls = apiUrls;

		this.tabTrips = [];
		this.tabTripsSteps = [];
		this.tabComments = [];
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

	findByTripId(id){
		this.CommentsService.findByTripId(id)
		.then((res)=>{
			this.tabComments = res.data.comments;
		},(err)=>{
			$log.log(err.status + '-' + err.statusText)
		})
	}


	addComment(tripId, comment){
		this.CommentsService.addComment(tripId,comment);
	}

}


CommentController['$inject'] = ['$scope','$http', '$log', 'TripService', 'StepsService', 'CommentsService', 'apiUrls'];


