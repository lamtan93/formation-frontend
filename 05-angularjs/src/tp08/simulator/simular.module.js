console.log('Bonjour simulator Module')
import SimulatorService from './tp08/simulator/simulator.service.js';

angular.module('simulatorModule', [])
.service('name', SimulatorService)