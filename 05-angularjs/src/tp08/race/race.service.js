export default class RaceService {
	constructor() {
		// la valeur de shirt est inspirée de la codification Bootstrap pour un choix
		//aisée des couleurs
		this.walkers = [{
			name: 'Paul',
			progress: 10,
			shirt: 'info'
		}, {
			name: 'Jean',
			progress: 10,
			shirt: 'success'
		}, {
			name: 'Julie',
			progress: 10,
			shirt: 'danger'
		}]
	}

	list() {
		return this.walkers
	}


	update(name, progress) {
		this.list().forEach((e)=>{
			if(e.name === name){
				e.progress = progress;
			}
		})

	}

}
