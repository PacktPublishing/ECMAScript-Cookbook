import { launchSequence } from './launch-sequence.js';

export const name = "Saturn V";
export const COUNT_DOWN_DURATION = 10;

export function launch () {
  launchSequence(COUNT_DOWN_DURATION, name);
}
