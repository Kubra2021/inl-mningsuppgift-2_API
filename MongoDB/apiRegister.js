import calories from './api/calories.js';
import distance from './api/distance.js';
import user from './api/user.js';
import exerciseType from './api/exerciseType.js';
import personalGoal from './api/personalGoal.js';
import steps from './api/steps.js';
import allData from './api/allData.js';

export default function apiRegister(server, mongoose) {
  calories(server, mongoose);
  distance(server, mongoose);
  user(server, mongoose);
  exerciseType(server, mongoose);
  personalGoal(server, mongoose);
  steps(server, mongoose);
  allData(server, mongoose);

}

