import { launchSequence } from './launch-sequence.js';

export const name = "Falcon Heavy";
export const COUNT_DOWN_DURATION = 5;

export function launch () {
  launchSequence(COUNT_DOWN_DURATION, name);
}
