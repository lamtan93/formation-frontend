export default class TripService{

	constructor($http, $log, apiUrls){
		this.$http = $http;
		this.$log = $log;
		this.tabTrips = [];
		this.apiUrls = apiUrls
	}

	findAll(){	
		return this.$http.get(this.apiUrls.light)
			.then((response) => {
				return response.data
			});	
	}
}