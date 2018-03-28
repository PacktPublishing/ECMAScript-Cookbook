class Rocket {
  constructor(name) {
    this.name = name;
  }
  
  print() {
    console.log(this.name + ' is a rocket');
  }
}

class InactiveRocket extends Rocket {
 constructor(name, lastFlown) {
    super(name);
    this.lastFlown = lastFlown;
  }

  print() {
    super.print();
    console.log(`${this.name} was last flown: ${this.lastFlown}`);
  }
}

export function main() {
  const saturnV = new InactiveRocket('Saturn V', new Date('May 14, 1973'));
  const falconHeavy = new Rocket('Falcon Heavy');

  falconHeavy.print();
  saturnV.print();
}