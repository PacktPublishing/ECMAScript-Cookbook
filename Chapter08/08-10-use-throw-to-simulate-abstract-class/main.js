class Rocket {
  constructor (name) {
    this.name = name;
    if (this.constructor === Rocket) {
      throw new Error('Abstract Class Should not be instantiated');
    }
  }
}

class ActiveRocket extends Rocket {}
class InactiveRocket extends Rocket {}

export function main() {
  const saturnV = new InactiveRocket('Saturn V');
  console.log(saturnV.name, ' is a Rocket ', saturnV instanceof Rocket);

  const falconHeavy = new ActiveRocket('Falcon Heavy');
  console.log(falconHeavy.name, ' is a Rocket ', falconHeavy instanceof Rocket);

  // throws an error;
  new Rocket('Not going to make it!');
}