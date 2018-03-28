import { launchSequence } from './launch-sequence.js';

const name = 'Atlas';
const COUNT_DOWN_DURATION = 20;

export const atlas = {
  name: name,
  COUNT_DOWN_DURATION: COUNT_DOWN_DURATION,
  launch: function () {
    launchSequence(COUNT_DOWN_DURATION, name);
  }
};
