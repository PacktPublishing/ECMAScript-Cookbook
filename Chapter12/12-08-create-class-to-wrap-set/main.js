class Rocket {
  constructor(name) {
    this.name = name;
  }
}

class RocketSet {
  constructor () {
    this.set = new Set();
  }

  add (rocket) {
    if (!(rocket instanceof Rocket)) {
      throw new Error('Members of `RocketSet` must be of type `Rocket`');
    }

    this.set.add(rocket);
  }

  has (rocket) {
    return this.set.has(rocket);
  }
}


export function main() {
  const rocketSet = new RocketSet();
  const saturnV = new Rocket('US: Saturn V')
  const falconHeavy = new Rocket('US: Falcon Heavy')
  const longMarch = new Rocket('Long March')
  rocketSet.add(saturnV);
  rocketSet.add(falconHeavy);
  rocketSet.add(longMarch);
  console.log(rocketSet)

  console.log('Set has Saturn V ',rocketSet.has(saturnV))
  console.log('Set has Falcon Heavy ',rocketSet.has(falconHeavy))
  console.log('Set has Long March ',rocketSet.has(longMarch))

  try {
    rocketSet.add('Buzz Lightyear');
  } catch (e) {
    console.error(e);
  }
}