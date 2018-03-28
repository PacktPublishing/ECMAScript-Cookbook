
class Rocket {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(this.name + ' is a Rocket');
  }
}

class InactiveRocket extends Rocket {
  constructor(name, lastFlown) {
    super(name);
    this.lastFlown = lastFlown;
  }

  print() {
    console.log(this.name + ' is an inactive rocket');
    console.log(`${this.name} was last flown: ${this.lastFlown}`);
  }
}

export function main() {
  const saturnV = new InactiveRocket('Saturn V', new Date('May 14, 1973'));
  const falconHeavy = new Rocket('Falcon Heavy');

  [saturnV, falconHeavy].forEach((r) => r.print());
}

