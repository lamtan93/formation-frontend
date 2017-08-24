export default class tripControllerDetail{

	constructor($resource){
		this.$resource = $resource;
	}

	$onInit(){
		this.TripResource = this.$resource('http://localhost:3000/trips-details/:tripId', {tripId:"@id"}, {
    		'update': { method:'PUT' }
 		})
		this.listTrips = this.TripResource.query();
	}

	updateDescription(trip){
		trip.$update()
	}

}
