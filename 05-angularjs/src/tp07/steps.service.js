export default class StepsService{

	constructor($http, $log, apiUrls){
		this.$http = $http;
		this.$log = $log;
		this.tabTrips = [];
		this.apiUrls = apiUrls
	}


	findStepsByTripId(id){
		return this.$http.get(this.apiUrls.full+'/'+id)
			.then((response) => {
				return response.data.steps;
			});	
	}
}