export default class SimulatorService {

	constructor($http, $log, RaceService) {
		this.$http = $http;
		this.$log = $log;
		this.RaceService = RaceService;
	}

	getRandomNumber() {
		this.randomNumber = Math.floor((Math.random() * 100) + 0);
		return this.randomNumber;
	}

	start() {
		// TODO modifier de manière aléatoire la position des compétiteurs toutes les
		//secondes
		// Utiliser le service RaceService

		let interval = setInterval(function() {

			this.RaceService.list().forEach((e) => {
				this.RaceService.update(e.name, getRandomNumber())
			})
		}, 1000);

		//to stop
		//clearInterval(myInterval);
	}
}


SimulatorService['$inject'] = ['$http', '$log', 'RaceService']