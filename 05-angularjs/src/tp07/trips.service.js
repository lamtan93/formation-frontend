export default class TripService{

	constructor($http, $log){
		this.$http = $http;
		this.$log = $log;
	}

	findAll(url){
		
		this.$http({
			url: url,
			method : 'GET'
		})
			.then((res) => {
				return res.data;
			});
	}




}