
export default class CommentController{

	constructor($http, $log, TripService){
		this.$http = $http;
		this.$log = $log;
		this.tabTrips = [];
		this.TripService = TripService;
	}

	$onInit(){
		//this.tabTrips = this.TripService.findAll();
	}

	

}