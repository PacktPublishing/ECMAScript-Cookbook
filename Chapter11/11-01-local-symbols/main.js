export function main() {
  const usLaunchLocation = Symbol('Kennedy Space Center');
  const duplicateLaunchLocation = Symbol('Kennedy Space Center');
  console.log(usLaunchLocation, duplicateLaunchLocation);
  console.log('Identical launch locations: ', usLaunchLocation === duplicateLaunchLocation);

  const rocketNumber = Symbol(5);
  const duplicateRocketNumber = Symbol(5);
  console.log(rocketNumber, duplicateRocketNumber);
  console.log('Identical rocket numbers: ', rocketNumber === duplicateRocketNumber);
}
