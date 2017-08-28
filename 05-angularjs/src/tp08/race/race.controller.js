export default class RaceController{

	constructor($scope, $http, $log, RaceService, SimulatorService){
		this.$scope =$scope;
		this.$http =$http;
		this.$log =$log;
		this.RaceService = RaceService;
		this.SimulatorService = SimulatorService;
		this.tabAllRacer = [];
		this.gagnant = {};
		this.$scope.nomchoisi = 'HELLO';
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

}

RaceController['$inject'] = ['$scope','$http', '$log', 'RaceService', 'SimulatorService'];
