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
import tplTp08 from './tp08/race/race.html';
//---------------service-----------------------
import apiUrls from './tp07/apiUrls.service.js';
import TripService from './tp07/trips.service.js';
import StepsService from './tp07/steps.service.js';
import CommentsService from './tp07/comments.service.js';

document.querySelector('body').innerHTML =
//[tplTp01,tplTp02,tplTp03,tplTp04, tplTp05, tplTp06,tplTp07, tplTp08].join('<hr>');
[tplTp08].join('<hr>');


import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/forms.controller'
import TripController from "./tp05/tripsList.controller";
import tripControllerDetail from "./tp06/tripsListDetails.controller";
import CommentController from "./tp07/tripsComments.controller";

import RaceModule from "./tp08/race/race.module.js"

angular.module('tripApp', ['ngResource'])

.controller(CarrouselCtrl.name, CarrouselCtrl)
.controller('FormController', FormController)
.controller('TripController', TripController)
.controller('tripControllerDetail', tripControllerDetail)
.controller('CommentController',CommentController)


.constant('apiUrls', apiUrls)
.service('TripService', TripService)
.service('StepsService', StepsService)
.factory('CommentsService', CommentsService)
