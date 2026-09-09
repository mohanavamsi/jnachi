import { calculateScores } from './lib/assessmentData.js';

console.log('Test 1 (all 0s):', calculateScores([0,0,0,0,0,0,0,0,0]));
console.log('Test 2 (all 3s):', calculateScores([3,3,3,3,3,3,3,3,3]));
console.log('Test 3 (all 1s):', calculateScores([1,1,1,1,1,1,1,1,1]));
