import rocketName, { launch, COUNT_DOWN_DURATION } from './rocket.js';

export function main () {
  console.log('This is a "%s" rocket', rocketName);
  console.log('It will launch in  "%d" seconds.', COUNT_DOWN_DURATION);
  launch();
}