console.log('Bonjour raceModule');

import RaceService from "./race.service"
import RaceController from './race.controller';
import SimulatorService from '../simulator/simulator.service';

const RaceModule = angular.module('RaceModule', [])


.controller('RaceController', RaceController)
.service('RaceService', RaceService)
.service('SimulatorService', SimulatorService)

export default RaceModule
