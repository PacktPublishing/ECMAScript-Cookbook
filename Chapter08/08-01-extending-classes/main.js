
class Rocket {
  constructor(name) {
    this.name = name;
  }
}

class InactiveRocket extends Rocket {}

export function main() {
  const saturnV = new InactiveRocket('Saturn V');
  const falconHeavy = new Rocket('Falcon Heavy');

  console.log(saturnV.name, ' is a rocket.');
  console.log(falconHeavy.name, ' is also a rocket.');
}

