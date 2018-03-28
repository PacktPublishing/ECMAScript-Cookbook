class Rocket {
  constructor(name) {
    this.name = name;
  }
}


export function main() {
  const saturnV = new Rocket('US: Saturn V');
  const saturnV2 = new Rocket('US: Saturn V');
  const falconHeavy = new Rocket('US: Falcon Heavy');

  const rocketSet = new WeakSet();
  rocketSet.add(saturnV);
  rocketSet.add(saturnV2);
  rocketSet.add(saturnV);
  rocketSet.add(falconHeavy);
  console.log(rocketSet)

  rocketSet.delete(falconHeavy);
  console.log(rocketSet)

  // throw error
  rocketSet.add('Saturn V');
}