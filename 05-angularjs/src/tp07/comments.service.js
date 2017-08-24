export default class{
	constructor($http, $log){
		this.$http = $http;
		this.$log = $log;
	}


	findByTripId(url,tripId){
		return this.$http.get(url+'/'+tripId);
	}


	addComment(url,tripId,comment){
		let trip;
		this.findByTripId(url+'/'+tripId)
		.then((res)=>{
			trip = res.data;
			trip.comment = comment;
			this.$http({
				method : 'PUT',
				url : url + '/' + tripId,
				data : trip
			}).then((res)=>{
				this.$log.log('status :'+res.statusText, res.status)	
			},(res)=>{
				this.$log.log('erreur: ' + res.statusText+ ',' + res.status);
			})

		})
	}

}