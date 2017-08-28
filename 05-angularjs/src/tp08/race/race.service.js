export default class RaceService {
	constructor() {
		// la valeur de shirt est inspirée de la codification Bootstrap pour un choix
		//aisée des couleurs
		this.walkers = [{
			name: 'Paul',
			progress: 20,
			shirt: 'info'
		}, {
			name: 'Jean',
			progress: 50,
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

	quiGagne(){
		this.max = 0;
		this.gagnant = {'name': 'unknow', 'progress':0, 'shirt':'unknown'};
		this.list().forEach((e)=>{
			if(e.progress > this.max){
				this.max = e.progress;
				this.gagnant.name = e.name;
				this.gagnant.progress = e.progress;
				this.gagnant.shirt = e.shirt;
			}
		})
		return this.gagnant;

	}


	getName(name){
		return name;
	}


	resultat(nameParie){
		this.gagnant = this.quiGagne();
		if(this.gagnant.name === nameParie){
			console.log("Vous avez gagné !");
		}else{
			console.log("Vous avez perdu !");	
		}
		
	}

}
