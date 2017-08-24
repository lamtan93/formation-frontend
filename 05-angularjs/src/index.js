
console.log('Bonjour App');
import angular from 'angular';
import ngResource from 'angular-resource'
// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html';
import tplTp02 from './tp02/vues.html';
import tplTp03 from './tp03/carrousel.html';
import tplTp04 from './tp04/forms.html';
import tplTp05 from './tp05/tripsList.html';
import tplTp06 from './tp06/tripsListDetails.html';
import tplTp07 from './tp07/tripsComments.html';

//---------------service-----------------------
import apiUrls from './tp07/apiUrls.service.js';
import TripService from './tp07/trips.service.js';
import CommentService from './tp07/comments.service.js';

document.querySelector('body').innerHTML =
[tplTp01,tplTp02,tplTp03,tplTp04, tplTp05, tplTp06,tplTp07].join('<hr>');


import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/forms.controller'
import TripController from "./tp05/tripsList.controller";
import tripControllerDetail from "./tp06/tripsListDetails.controller";
import CommentController from "./tp07/tripsComments.controller";

angular.module('tripApp', ['ngResource']) 

.controller(CarrouselCtrl.name, CarrouselCtrl)
.controller('FormController', FormController)
.controller('TripController', TripController)
.controller('tripControllerDetail', tripControllerDetail)
.controller('CommentController',CommentController)


.constant('urlTripsLight', apiUrls.light)
.constant('urlTripsDetails', apiUrls.full)

.service('TripService', ['$http','$log', function($http, $log){
	const tripService = new TripService();
	this.findAll =(url)=>{
		return tripService.findAll(url);
	}	
}])

.factory('commentService', ['$http','$log', function($http, $log){
	const commentService = new CommentService();
	return function addComment(url,idTrip,comment){
		commentService.addComment(url, idTrip, comment);
	};
}])

