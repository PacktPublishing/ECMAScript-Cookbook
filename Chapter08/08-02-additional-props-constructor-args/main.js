
class Rocket {
  constructor(name) {
    this.name = name;
  }
}

class InactiveRocket extends Rocket {
  constructor(name, lastFlown) {
    super(name);
    this.lastFlown = lastFlown;
  }
}


export function main() {
  const saturnV = new InactiveRocket('Saturn V', new Date('May 14, 1973'));
  const falconHeavy = new Rocket('Falcon Heavy');

  console.log(falconHeavy.name + ' is a Rocket');
  console.log(saturnV.name + ' is an inactive rocket');
  console.log(`${saturnV.name} was last flown: ${saturnV.lastFlown}`);
}

