console.log('Bonjour simulator Module')
import SimulatorService from './simulator.service.js';
import RaceModule from '../race/race.module.js';
import RaceService from '..race/race.service.js'


angular.module('SimulatorModule', [RaceModule])
.service('SimulatorService', SimulatorService)
.service('RaceService', RaceService)
