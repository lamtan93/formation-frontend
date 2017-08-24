export default class TripController {

	constructor($scope, $http) {
		this.$scope = $scope;
		this.$http = $http;
		this.listTrip = [];
	}


	$onInit() {
		
			this.$http.get('http://localhost:3000/trips')
				.then((res)=>{
					this.listTrip = res.data;
				});
	}


	getTripById(idRecherche) {
		return this.$http.get('http://localhost:3000/trips' + '/' + idRecherche);
	}


	save(idRecherche, name, prix) {

		let trip;
		this.getTripById(idRecherche)
			.then((res) => {
				trip = res.data;
				trip.name = name;
				trip.prix = prix;


				console.log(trip.name);
				this.$http({
						method: 'PUT',
						url: 'http://localhost:3000/trips' + '/' + idRecherche,
						data: trip
					})
					.then((res) => {
						console.log(res.statusText, res.status)

					})


			})



	}

}