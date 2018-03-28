export function main() {
  const usLaunchLocation = Symbol.for('Kennedy Space Center');
  const duplicateLaunchLocation = Symbol.for('Kennedy Space Center');
  console.log(usLaunchLocation, duplicateLaunchLocation);
  console.log('Identical launch locations: ', usLaunchLocation === duplicateLaunchLocation);

  const rocketNumber = Symbol.for(5);
  const duplicateRocketNumber = Symbol.for(5);
  const stringDuplicateRocketNumber = Symbol.for("5");
  console.log(rocketNumber, duplicateRocketNumber, stringDuplicateRocketNumber);
  console.log('Identical rocket numbers: ', rocketNumber === duplicateRocketNumber);
  console.log('Identical string rocket numbers: ', rocketNumber === stringDuplicateRocketNumber);

  console.log(Symbol.keyFor(rocketNumber), Symbol.keyFor(stringDuplicateRocketNumber));
  console.log(typeof Symbol.keyFor(rocketNumber), typeof Symbol.keyFor(stringDuplicateRocketNumber));
}
