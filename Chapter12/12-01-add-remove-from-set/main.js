export function main() {
  const rocketSet = new Set();
  rocketSet.add('US: Saturn V');
  rocketSet.add('US: Saturn V');
  rocketSet.add('US: Falcon Heavy');
  console.log(rocketSet)

  rocketSet.delete('US: Falcon Heavy');
  console.log(rocketSet)
}