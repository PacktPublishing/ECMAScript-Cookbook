let rocketMap = {};
let inactiveRocketMap = {};

class Rocket {
  static find (name) {
    return rocketMap[name];
  }

  constructor(name) {
    this.name = name;
    rocketMap[name] = this;
  }

  print() {
    console.log(this.name + ' is a rocket');
  }
}

class InactiveRocket extends Rocket {
  static find (name) {
    return inactiveRocketMap[name];
  }

 constructor(name, lastFlown) {
    super(name);
    this.lastFlown = lastFlown;
    inactiveRocketMap[name] = this;
  }

  print() {
    console.log(this.name + ' is an inactive rocket');
    console.log(`${this.name} was last flown: ${this.lastFlown}`);
  }
}

export function main() {
  const saturnV = new InactiveRocket('Saturn V');
  const falconHeavy = new Rocket('Falcon Heavy');

  // print rocket for saturn V and falcon heavy
  console.log('All Rockets:');
  Rocket.find('Saturn V').print();
  Rocket.find('Falcon Heavy').print();

  // print inactive entry for saturn v and attempt falcon
  console.log('Inactive Rockets:');
  InactiveRocket.find('Saturn V').print();
  // throws an error
  InactiveRocket.find('Falcon Heavy').print();
}
