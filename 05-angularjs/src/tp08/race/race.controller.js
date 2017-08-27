export default class RaceController{

	constructor($scope, $http, $log, RaceService, SimulatorService){
		this.$scope =$scope;
		this.$http =$http;
		this.$log =$log;
		this.RaceService = RaceService;
		this.SimulatorService = SimulatorService;
		this.tabAllRacer = [];
	}

	 $onInit(){
		 this.tabAllRacer = this.RaceService.list();
	 }

	start(){
		this.SimulatorService.start();
	}

}

RaceController['$inject'] = ['$scope','$http', '$log', 'RaceService', 'SimulatorService'];
