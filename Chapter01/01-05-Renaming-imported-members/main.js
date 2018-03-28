import rocketName, { launch, COUNT_DOWN_DURATION } from './saturn-v.js';
import falconName, { launch as falconLaunch, COUNT_DOWN_DURATION as falconCount } from './falcon-heavy.js';

export function main () {
  console.log('This is a "%s" rocket', rocketName);
  console.log('It will launch in  "%d" seconds.', COUNT_DOWN_DURATION);
  launch();
  
  console.log('This is a "%s" rocket', falconName);
  console.log('It will launch in  "%d" seconds.', falconCount);
  falconLaunch();
}