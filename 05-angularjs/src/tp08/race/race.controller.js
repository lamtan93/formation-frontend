export default class RaceController{

	constructor($scope, $http, $log, RaceService, SimulatorService){
		this.$scope =$scope;
		this.$http =$http;
		this.$log =$log;
		this.RaceService = RaceService;
		this.SimulatorService = SimulatorService;
		this.tabAllRacer = [];
		this.gagnant = {};
		this.nameChoosen = 'unknown';
	}

	 $onInit(){
		 this.tabAllRacer = this.RaceService.list();
		 this.quiGagne();
	 }

	start(){
		this.SimulatorService.start();
	}

	quiGagne(){
		this.gagnant = this.RaceService.quiGagne();
	}

	getName(name){
		console.log(this.RaceService.getName(name));
		this.nameChoosen = this.RaceService.getName(name);
	}

}

RaceController['$inject'] = ['$scope','$http', '$log', 'RaceService', 'SimulatorService'];
