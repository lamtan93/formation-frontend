export default class RaceController{

	constructor($scope, $http, $log, RaceService){
		this.$scope =$scope;
		this.$http =$http;
		this.$log =$log;
		this.RaceService = RaceService;
		this.tabAllRacer = [];
	}


	list() {
		this.tabAllRacer = this.RaceService.list();
	}


	update(name, progress){
		this.RaceService.update(name, progress);
	}

}

RaceController['$inject'] = ['$scope','$http', '$log', 'RaceService'];