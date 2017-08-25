console.log('Bonjour raceModule');
import RaceService from './tp08/race/race.service.js';

angular.module('raceModule', [])
.service('RaceService', RaceService)