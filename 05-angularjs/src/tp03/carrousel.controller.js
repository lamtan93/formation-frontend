/*export default function CarrouselCtrl($scope) {
	$scope.images = [
	{
		'name': 'New York',
		'url': './img/nyc.jpg'
	}, {
		'name': 'Paris',
		'url': './img/paris.jpg'
	}, {
		'name': 'Rio de Janeiro',
		'url': './img/rio-de-janeiro.jpg'
	}, {
		'name': 'Rome',
		'url': './img/rome.jpg'
	}, {
		'name': 'Tokyo',
		'url': './img/tokyo.jpg'
	}
	];

	$scope.currentId = 0;

	$scope.next = function(){
		$scope.currentId += 1;
	};

	$scope.previous = function(){
		$scope.currentId -= 1;
	};

}*/


//----------------Es2015-------------------

export default class CarrouselCtrl {

    constructor($interval) {
       this.$interval = $interval
    }

    $onInit() {
        this.images = [
            { 'name': 'New York', 'url': 'img/nyc.jpg' },
            { 'name': 'Paris', 'url': 'img/paris.jpg' },
            { 'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg' },
            { 'name': 'Rome', 'url': 'img/rome.jpg' },
            { 'name': 'Tokyo', 'url': 'img/tokyo.jpg' }
        ];
        this.currentId = 0;
        this.$interval(() => this.next(), 1500);
    }

    next(){
        this.currentId == this.images.length - 1 ? this.currentId = 0 : this.currentId++;
    }

    previous(){
        this.currentId == 0 ? this.currentId = this.images.length - 1 : this.currentId--;
    }

}

//-------------------------------------


