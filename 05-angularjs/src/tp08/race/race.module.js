console.log('Bonjour raceModule');
import RaceService from './tp08/race/race.service.js';
import RaceController from './tp08/race/race.controller.js';

const raceModule = angular.module('raceModule', [])

.controller('RaceController', RaceController);
.service('RaceService', RaceService)

export default raceModule