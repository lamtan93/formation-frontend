console.log('Bonjour simulator Module')
import SimulatorService from './tp08/simulator/simulator.service.js';
import raceModule from './tp08/race/race.module.js';

angular.module('simulatorModule', [raceModule])
.service('SimulatorService', SimulatorService)